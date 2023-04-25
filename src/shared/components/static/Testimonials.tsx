const Testimonials = () => {
  return (
    <section className="container-x overflow-hidden bg-white py-6 md:py-8 lg:py-12">
      <header className="mb-8">
        <h1 className="  font-extrabold text-gray-900 ">
          People ❤️ Kraftbase
        </h1>
        <p className="heading-3 mt-3 font-medium text-gray-500 sm:mt-4">
          Kraftbase has built products for scale and can serve  hundreds of
          millions of monthly users.
        </p>
      </header>
      {/*   <div className="mt-10 bg-white pb-12 sm:pb-16">
          <div className="relative w-full">
            <div className="mx-auto">
              <dl className="rounded-lg bg-white sm:grid sm:grid-cols-3">
                <div className="flex flex-col border-b border-gray-200 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                Paying subscribers
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                10k
                  </dd>
                </div>
                <div className="flex flex-col border-y border-gray-200 p-6 text-center sm:border-0 sm:border-x">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                Active websites
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                122k
                  </dd>
                </div>
                <div className="flex flex-col border-t border-gray-200 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                Tracked pageviews
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                39.1B
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div> */}
      <div className="grid-cols-3 gap-4 md:grid">
        <div className="my-4 md:m-0">
          <div className="rounded-lg border border-gray-200 p-4">
            <div className="flex items-center">
              <a
                className="group flex items-center"
                href="https://twitter.com/debs_obrien"
                target="_blank"
                rel="noreferrer"
              >
                <div className="ml-2 leading-tight">
                  <div className="font-bold group-hover:text-blue-500">
                    Debbie O&lsquo;Brien
                  </div>
                  <div className="text-xs text-gray-500">@debs_obrien</div>
                </div>
              </a>
              <a
                className="twitter-icon ml-auto"
                href="https://twitter.com/debs_obrien/status/1354809329203830797"
                target="_blank"
                rel="noreferrer"
              />
            </div>
            <div className="tweet-text mt-2 cursor-text whitespace-pre-wrap text-sm">
              I recently switched from Google Analytics to
              <a
                target="_blank"
                href="https://twitter.com/PlausibleHQ"
                rel="noreferrer"
              >
                @PlausibleHQ
              </a>
              and I am really happy with it so far. I wrote a post about it and
              how you can add Plausible to your
              <a
                target="_blank"
                href="https://twitter.com/nuxt_js"
                rel="noreferrer"
              >
                @nuxt_js
              </a>
              site 💚
              <a
                target="_blank"
                href="https://debbie.codes/blog/nuxt-analytics/"
                rel="noreferrer"
              >
                debbie.codes/blog/nuxt-analytics/
              </a>
            </div>
          </div>
        </div>
        <div className="my-4 md:m-0">
          <div className="rounded-lg border border-gray-200 p-4">
            <div className="flex items-center">
              <a
                className="group flex items-center"
                href="https://twitter.com/elementary"
                target="_blank"
                rel="noreferrer"
              >
                <div className="ml-2 leading-tight">
                  <div className="font-bold group-hover:text-blue-500">
                    elementary
                  </div>
                  <div className="text-xs text-gray-500">@elementary</div>
                </div>
              </a>
              <a
                className="twitter-icon ml-auto"
                href="https://twitter.com/elementary/status/1283851023568850947"
                target="_blank"
                rel="noreferrer"
              />
            </div>
            <div className="tweet-text mt-2 cursor-text whitespace-pre-wrap text-sm">
              We&lsquo;ve completely left Google Analytics behind in favor of
              <a
                target="_blank"
                href="https://twitter.com/PlausibleHQ"
                rel="noreferrer"
              >
                @PlausibleHQ
              </a>
              . Google&lsquo;s incentive is to collect as much information as
              possible from people visiting as many sites as possible—and using
              Google Analytics directly helps them do that.
              <a
                target="_blank"
                href="https://blog.elementary.io/leaving-google-analytics-is-finally-plausible/"
                rel="noreferrer"
              >
                blog.elementary.io/leaving-google…
              </a>
            </div>
          </div>
        </div>
        <div className="my-4 md:m-0">
          <div className="rounded-lg border border-gray-200 p-4">
            <div className="flex items-center">
              <a
                className="group flex items-center"
                href="https://twitter.com/robhope"
                target="_blank"
                rel="noreferrer"
              >
                <div className="ml-2 leading-tight">
                  <div className="font-bold group-hover:text-blue-500">
                    Rob Hope 🇿🇦
                  </div>
                  <div className="text-xs text-gray-500">@robhope</div>
                </div>
              </a>
              <a
                className="twitter-icon ml-auto"
                href="https://twitter.com/robhope/status/1351465826109558784"
                target="_blank"
                rel="noreferrer"
              />
            </div>
            <div className="tweet-text mt-2 cursor-text whitespace-pre-wrap text-sm">
              Just replaced my full network&lsquo;s Google Analytics with
              <a
                target="_blank"
                href="https://twitter.com/PlausibleHQ"
                rel="noreferrer"
              >
                @PlausibleHQ
              </a>
              - I can&lsquo;t remember when last I was this impressed by a SaaS
              UX + design 💯 <br /> <br /> Became a paying customer within 1hr
              of the 30-day trial.
            </div>
          </div>
        </div>
        <div className="my-4 md:m-0">
          <div className="rounded-lg border border-gray-200 p-4">
            <div className="flex items-center">
              <a
                className="group flex items-center"
                href="https://twitter.com/dhh"
                target="_blank"
                rel="noreferrer"
              >
                <div className="ml-2 leading-tight">
                  <div className="font-bold group-hover:text-blue-500">DHH</div>
                  <div className="text-xs text-gray-500">@dhh</div>
                </div>
              </a>
              <a
                className="twitter-icon ml-auto"
                href="https://twitter.com/dhh/status/1438785402576506884"
                target="_blank"
                rel="noreferrer"
              />
            </div>
            <div className="tweet-text mt-2 cursor-text whitespace-pre-wrap text-sm">
              Been a very happy customer of Plausible at Basecamp. Wonderful to
              see domains like web stats that were once a wasteland due to
              monopoly weight spring new, better options ❤️
            </div>
          </div>
        </div>
        <div className="my-4 md:m-0">
          <div className="rounded-lg border  border-gray-200 p-4">
            <div className="flex items-center">
              <a
                className="group flex items-center"
                href="https://twitter.com/Prezly"
                target="_blank"
                rel="noreferrer"
              >
                <div className="ml-2 leading-tight">
                  <div className="font-bold group-hover:text-blue-500">
                    Prezly
                  </div>
                  <div className="text-xs text-gray-500">@Prezly</div>
                </div>
              </a>
              <a
                className="twitter-icon ml-auto"
                href="https://twitter.com/Prezly/status/1566772185712267266"
                target="_blank"
                rel="noreferrer"
              />
            </div>
            <div className="tweet-text mt-2 cursor-text whitespace-pre-wrap text-sm">
              We are super excited to announce that Prezly now has analytics!
              Thanks to
              <a
                target="_blank"
                href="https://twitter.com/PlausibleHQ"
                rel="noreferrer"
              >
                @PlausibleHQ
              </a>
              , our users can access simple, privacy-minded, and lightweight
              data right from the dashboard.
              <a
                target="_blank"
                href="https://www.prezly.com/help/analytics-dashboard"
                rel="noreferrer"
              >
                prezly.com/help/analytics-dashboard
              </a>
            </div>
          </div>
        </div>
        <div className="my-4 md:m-0">
          <div className="rounded-lg border border-gray-200 p-4">
            <div className="flex items-center">
              <a
                className="group flex items-center"
                href="https://twitter.com/TheErlef"
                target="_blank"
                rel="noreferrer"
              >
                <div className="ml-2 leading-tight">
                  <div className="font-bold group-hover:text-blue-500">
                    Erlang Ecosystem Foundation
                  </div>
                  <div className="text-xs text-gray-500">@TheErlef</div>
                </div>
              </a>
              <a
                className="twitter-icon ml-auto"
                href="https://twitter.com/TheErlef/status/1369689461886496771"
                target="_blank"
                rel="noreferrer"
              />
            </div>
            <div className="tweet-text mt-2 cursor-text whitespace-pre-wrap text-sm">
              We&lsquo;re very excited to announce that we&lsquo;re switching to
              <a
                target="_blank"
                href="https://twitter.com/PlausibleHQ"
                rel="noreferrer"
              >
                @PlausibleHQ
              </a>
              ! 📈🚀
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
