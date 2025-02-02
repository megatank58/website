use yew::prelude::*;
use yew_router::prelude::*;

use crate::routes::{blogs::Blogs, home::Home};

#[derive(Clone, Routable, PartialEq)]
pub enum Route {
    #[at("/")]
    Home,
    #[at("/blogs")]
    Blogs,
    #[at("/blog/:id")]
    Blog { id: String },
    #[not_found]
    #[at("/404")]
    NotFound,
}

fn switch(route: Route) -> Html {
    match route {
        Route::Home => html! { <Home /> },
        Route::Blogs => html! { <Blogs /> },
        Route::Blog { .. } => todo!(),
        Route::NotFound => html! { "404" },
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
