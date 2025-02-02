use yew::prelude::*;
use yew_router::prelude::*;

use crate::routes::{blogs::Blogs, home::Home};

#[derive(Clone, Routable, PartialEq)]
enum Route {
    #[at("/")]
    Home,
    #[at("/blogs")]
    Blogs,
    #[at("/blog/:id")]
    Blog { id: String },
}

fn switch(route: Route) -> Html {
    match route {
        Route::Home => html! { <Home /> },
        Route::Blogs => html! { <Blogs /> },
        Route::Blog { .. } => todo!(),
    }
}

#[function_component(App)]
pub fn app() -> Html {
    html! {
        <BrowserRouter>
            <Switch<Route> render={switch} />
        </BrowserRouter>
    }
}
