mod app;
mod routes;

use app::App;

fn main() {
    yew::Renderer::<App>::new().render();
}
