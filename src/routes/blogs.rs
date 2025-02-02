use yew::prelude::*;

#[function_component(Blogs)]
pub fn blogs() -> Html {
    html! {
            <div class="hero bg-base-100">
              <div class="hero-content text-center">
                <div>
                  <h1 class="my-8 text-5xl font-bold underline">{"Blogs"}</h1>
                  <ul class="timeline timeline-snap-icon timeline-vertical">
                    <li>
                      <div class="timeline-middle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-7 w-7 border p-1 rounded-2xl text-primary"
                          viewBox="0 0 24 24"
                          ><path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2 21q1-6 6-7t6-3m5-9q-2 4-8 4a1 1 0 0 0 0 14a10 11 0 0 0 8-18"
                          ></path></svg
                        >
                      </div>
                      <div class="timeline-start mb-10">
                        <div
                          class="card bg-base-200 rounded-xl border-l-4 shadow-md border-base-content"
                        >
                          <div class="card-body">
                            <h2 class="card-title flex-col gap-0 mb-2">
                              {"Redesigning the syntax of calcagebra"}
                              <span class="ml-auto text-sm font-light"
                                >{"- 02/02/2025"}</span
                              >
                            </h2>
                            <p class="text-start">
                              {"I had to recently completely rework the way calcagebra parsed and 
                              executes code due to logic issue that would yield the language's 
                              usability minimal to simple cases. This blog discusses the reasons
                              and potential issues that could have arrised along with the new syntax
                              and potential issues that will arise."}
                            </p>
                            <div class="card-actions justify-end">
                              <a
                                class="btn btn-primary rounded-xl"
                                aria-label="calcagebra cranelift blog page"
                                href="/blogs/calcagebra-cranelift"
                                ><svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-5 w-5"
                                  viewBox="0 0 24 24"
                                  ><path
                                    fill="currentColor"
                                    d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10z"
                                  ></path></svg
                                ></a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        }
}
