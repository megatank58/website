FROM gitpod/workspace-full-vnc:latest

# Install dependencies
RUN sudo apt update && sudo DEBIAN_FRONTEND=noninteractive apt install -y libwebkit2gtk-4.0-dev \
    build-essential \
    curl \
    wget \
    libssl-dev \
    libgtk-3-dev \
    libappindicator3-dev \
    patchelf \
    librsvg2-dev \
    && sudo rm -rf /var/lib/apt/lists/*