import React from "react"

const CreatingCadellDev = () => {
  return (
    <div>
      <h1>Creating cadell.dev</h1>
      <p>6:20pm 10/4/2019</p>
      <ol>
        <li>
          <p>
            Open{" "}
            <a href="https://typora.io/" target="_blank" class="url">
              https://typora.io/
            </a>{" "}
            so you can write your first blog post as you go.
          </p>
        </li>
        <li>
          <p>
            Go to{" "}
            <a href="https://domains.google.com" target="_blank" class="url">
              https://domains.google.com
            </a>{" "}
            to buy the .dev domain. Its a bit cheaper than namecheap.
          </p>
          <ol>
            <li>Verify the domain by clicking the link in your emails.</li>
            <li>Leave this tab open for later.</li>
          </ol>
        </li>
        <li>
          <p>
            Go to{" "}
            <a href="https://github.com" target="_blank" class="url">
              https://github.com
            </a>{" "}
            to create the repo.
          </p>
          <ol>
            <li>
              Click the plus on the top right corner, then go New repository.
            </li>
            <li>Name it cadell.dev.</li>
            <li>Click Create Repository.</li>
            <li>Leave the tab open.</li>
          </ol>
        </li>
        <li>
          <p>
            Go to{" "}
            <a href="https://www.gatsbyjs.org/" target="_blank" class="url">
              https://www.gatsbyjs.org/
            </a>
          </p>
          <ol>
            <li>
              <p>
                <a
                  href="https://www.gatsbyjs.org/docs/quick-start"
                  target="_blank"
                  class="url"
                >
                  https://www.gatsbyjs.org/docs/quick-start
                </a>
              </p>
            </li>
            <li>
              <p>Open Terminal.</p>
            </li>
            <li>
              <p>
                cd to your personal dev folder. <code>cd dev/personal</code>
              </p>
            </li>
            <li>
              <p>Install the gatsby CLI</p>
            </li>
            <li>
              <pre>
                <code class="language-shell" lang="shell">
                  npm install -g gatsby-cli
                </code>
              </pre>
            </li>
            <li>
              <p>Create the site. </p>
              <p>
                <code>gatsby new cadell.dev</code>
              </p>
            </li>
            <li>
              <p>
                cd into cadell.dev <code>cd cadell.dev</code>
              </p>
            </li>
            <li>
              <p>
                start gatsby <code>gatsby develop</code>
              </p>
            </li>
            <li>
              <p>Open localhost:8000 in your browser</p>
            </li>
            <li>
              <p>close gatsby by clicking control+c</p>
            </li>
          </ol>
        </li>
        <li>
          <p>Open the github page you left open earlier</p>
          <ol>
            <li>
              <p>
                Copy the command from the &quot;or push an exsting repository
                from the command line&quot; section. Gatsby created a git repo
                for us.
              </p>
            </li>
            <li>
              <p>run the command in terminal</p>
              <pre>
                <code class="language-shell" lang="shell">
                  git remote add origin
                  https://github.com/cadbox1/cadell.dev.git git push -u origin
                  master
                </code>
              </pre>
            </li>
            <li>
              <p>
                Refresh the github page to see the files from our first commit.
              </p>
            </li>
          </ol>
        </li>
        <li>
          <p>
            Go to{" "}
            <a href="https://www.netlify.com/" target="_blank" class="url">
              https://www.netlify.com/
            </a>
          </p>
          <ol>
            <li>Signup</li>
            <li>Activate your account via email to get in (I like this).</li>
            <li>
              On the Create a new site page, Click connect to Git provider.
            </li>
            <li>Click GitHub.</li>
            <li>Auhtorize Nelify by Netlify to access your GitHub account.</li>
            <li>Select the cadell.dev repo.</li>
            <li>Click Install.</li>
            <li>Select the cadell.dev repo in Netlify.</li>
            <li>
              Netlify has automatically detected that our site is a Gatsby site.
              Click Deploy site.
            </li>
            <li>Wait a few moments for the site to be deployed.</li>
            <li>
              Click Set up a custom domain. Apparently you can buy the domain
              inside Netlify, for ~$5 aud extra. Oh well, setting up DNS is
              somewhat related to being a web developer.
            </li>
            <li>Type in cadell.dev</li>
            <li>Click Yes, add domain.</li>
            <li>Click Check DNS configuration.</li>
            <li>
              Now apparently we can either do the developer thing I spoke about
              earlier and setup the DNS in Google or get Netlify to manage our
              DNS. The latter will mean that we can have branch deploys under
              our domain which sounds aesthetically better.{" "}
              <a
                href="https://www.netlify.com/docs/continuous-deployment/#branches-deploys"
                target="_blank"
                class="url"
              >
                https://www.netlify.com/docs/continuous-deployment/#branches-deploys
              </a>
              . We still get to configure name servers which is still pretty
              developery
            </li>
            <li>Click Set up Netlify DNS for cadell.dev</li>
            <li>Click Verify</li>
            <li>Click Yes, add domain.</li>
            <li>
              Since Netlify will now be our DNS, we have the option to add DNS
              records if we use the domain for other services like email.
              Let&#39;s skip this since we can always do it later.
            </li>
            <li>Click Continue.</li>
            <li>Open up the Google Domains tab we left open from earlier.</li>
            <li>Click Use custom name servers for your domain.</li>
            <li>Click User custom name servers.</li>
            <li>Enter each one of the Netlify name servers.</li>
            <li>Click Save.</li>
            <li>
              Click Change name servers anyway when prompted with a scary DNSSEC
              warning.
            </li>
            <li>Open the Netlify tab.</li>
            <li>Click Done.</li>
            <li>
              Refresh the page after a few moments to make the DNS warnings go
              away.
            </li>
            <li>Scroll down to HTTPS, click Verify DNS Configuration.</li>
            <li>
              Scroll up to Branch subdomains, click Deploy settings panel.
            </li>
            <li>Under Deploy contexts, click Edit settings.</li>
            <li>Select All for Branch deploys.</li>
            <li>Click Save.</li>
            <li>
              Click on Domain management to see that our SSL certificate has
              been created.
            </li>
            <li>
              We can now go to{" "}
              <a href="https://cadell.dev/" target="_blank" class="url">
                https://cadell.dev/
              </a>
            </li>
            <li>
              Apparently you can also choose a starter to setup a git repo for
              us{" "}
              <a
                href="https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default"
                target="_blank"
                class="url"
              >
                https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default
              </a>
            </li>
          </ol>
        </li>
        <li>
          <p>Open VSCode.</p>
          <ol>
            <li>Open the cadell.dev folder.</li>
            <li>Hit Control+` to reveal the terminal.</li>
            <li>
              Create a new branch <code>git checkout -b FirstRealCommit</code>
            </li>
            <li>
              Run <code>yarn start</code> to start the development server. This
              is standard for npm projects.
            </li>
            <li>
              Cmd+Click the{" "}
              <a href="http://localhost:8000/" target="_blank" class="url">
                http://localhost:8000/
              </a>{" "}
              link in terminal to open it in your browser.
            </li>
            <li>
              Double click the index.js file under src/pages. The double click
              makes the tab &#39;sticky&#39;.
            </li>
            <li />
          </ol>
        </li>
      </ol>
    </div>
  )
}

export default CreatingCadellDev
