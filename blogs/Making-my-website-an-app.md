# Making my website a desktop application with [Tauri](https://tauri.studio)

Tauri is a toolkit that helps developers make applications for the major desktop platforms - using virtually any frontend framework in existence. 
The core is built with Rust and the CLI leverages Node.js making Tauri a genuinely polyglot approach to creating and maintaining great apps.

Now I understand nothing, but they have a [good guide](https://tauri.studio/en/docs/getting-started/intro) which was my only help while making the app

## Making the app

Making the application itself wasn't really hard as the guide goes over the basics pretty well and I already have a *working* website

First of all I had to Install some dependencies, now since I was running GitPod which uses debain containers it was as easy as running

```bash
$ sudo apt update && sudo apt install libwebkit2gtk-4.0-dev \
    build-essential \
    curl \
    wget \
    libssl-dev \
    libgtk-3-dev \
    libappindicator3-dev \
    patchelf \
    librsvg2-dev
```

(this command actually worked in first try)

Other tools like rust, cargo, node.js and yarn are preinstalled on GitPod.

So now I can install the Tauri cli like any other dependency using yarn:
```bash
$ yarn add -D @tauri-apps/cli
```
and the api as I am using vite and webpack
```bash
$ yarn add @tauri-apps/api
```
Then I can easily run
```bash
$ yarn tauri init
```
And it generates a lot of files for me in the root, all of which work out of the box:
```
── src-tauri
    ├── .gitignore
    ├── Cargo.toml
    ├── rustfmt.toml
    ├── tauri.conf.json
    ├── icons
    │   ├── 128x128.png
    │   ├── 128x128@2x.png
    │   ├── 32x32.png
    │   ├── Square107x107Logo.png
    │   ├── Square142x142Logo.png
    │   ├── Square150x150Logo.png
    │   ├── Square284x284Logo.png
    │   ├── Square30x30Logo.png
    │   ├── Square310x310Logo.png
    │   ├── Square44x44Logo.png
    │   ├── Square71x71Logo.png
    │   ├── Square89x89Logo.png
    │   ├── StoreLogo.png
    │   ├── icon.icns
    │   ├── icon.ico
    │   └── icon.png
    └── src
        ├── build.rs
        ├── cmd.rs
        └── main.rs
```
Tauri also has a `yarn tauri info` [command](https://tauri.studio/en/docs/usage/development/integration#3-check-tauri-info-to-make-sure-everything-is-set-up-properly) which outputs a lot of useful information

I will be using the [Cloudish Pattern](https://tauri.studio/en/docs/usage/patterns/cloudish) here.

# Building the app

Tauri offers a handy `yarn tauri build` command to build the application, but thats not ideal for cross compilation, so I decided to use GitHub Actions for compiling on push.
Luckliy for me, Tauri has an offical [action](https://github.com/tauri-apps/tauri-action#creating-a-release-and-uploading-the-tauri-bundles) to build the application for Windows (msi), Ubuntu (.deb + AppImage) and MacOs

So I just ~~copied~~ wrote it in `.github/workflows` folder and made it to use the stable branch and it worked as expected, it does takes ~10mins to build probably because it downloads a lot of rust dependencies but it works well.

```yaml
name: "publish"
on:
  push:
    branches:
      - stable

jobs:
  publish-tauri:
    strategy:
      fail-fast: false
      matrix:
        platform: [macos-latest, ubuntu-latest, windows-latest]

    runs-on: ${{ matrix.platform }}
    steps:
    - uses: actions/checkout@v2
    - name: setup node
      uses: actions/setup-node@v1
      with:
        node-version: 12
    - name: install Rust stable
      uses: actions-rs/toolchain@v1
      with:
        toolchain: stable
    - name: install webkit2gtk (ubuntu only)
      if: matrix.platform == 'ubuntu-latest'
      run: |
        sudo apt-get update
        sudo apt-get install -y webkit2gtk-4.0
    - name: install app dependencies and build it
      run: yarn && yarn build
    - uses: tauri-apps/tauri-action@v0
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      with:
        tagName: app-v__VERSION__ # the action automatically replaces \_\_VERSION\_\_ with the app version
        releaseName: "App v__VERSION__"
        releaseBody: "See the assets to download this version and install."
        releaseDraft: true
        prerelease: false
```

And thats how I made my website into an application with sizes as low as: 

| File | Size |
| ---- | ---- |
| Megatank58.app.tar.gzv | 2.52 MB |
| megatank58_1.0.0_amd64.AppImage | 66.1 MB |
| megatank58_1.0.0_amd64.deb | 4.47 MB |
| Megatank58_1.0.0_x64.dmg | 2.97 MB |
| Megatank58_1.0.0_x64.msi | 3.49 MB |

Also, in case you are wondering, the AppImage is bigger in size because it ships with the necessary runtime dependencies

You can see the application and download it for yourself [here](https://github.com/Megatank58/website/releases/tag/app-v1.0.0)

> Megatank58
