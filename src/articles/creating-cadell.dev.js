import React from "react"

const CreatingCadellDev = () => {
  return (
    <div>
      <h1>Creating cadell.dev</h1>
      <p>6:20pm 10/4/2019</p>
      <p>Duration: 2h 40m while writing this post.</p>
      <h2>Introduction</h2>
      <p>
        There was some{" "}
        <a href="https://news.ycombinator.com/item?id=19615546">rave reviews</a>{" "}
        for Netlify on hackernews this morning. It really did sound awesome -
        static hosting with a CDN, branch deployments,{" "}
        <a href="https://www.netlifycms.org/">Netlify CMS</a> and{" "}
        <a href="https://www.netlify.com/docs/functions/">Netlify Functions</a>{" "}
        all for free.
      </p>
      <p>
        Combined with my mate, Franc, telling me to snatch up cadell.dev led me
        to create this website and post.
      </p>
      <p>
        The Netlify experience was fantastic! A few decisions along the way but
        overall very seamless.
      </p>
      <p>
        The biggest decision to make was how to use Gatsby - should I use the
        blog starter pack or the basic starter pack. This was a bit of a time
        sink. I opted for the base starter pack and manual markdown file
        conversions for now.
      </p>
      <h2>Method</h2>
      <ol>
        <li>
          <p>
            Open <a href="%5Bhttps://typora.io/">Typora</a> so you can write
            your first blog post as you go.
          </p>
        </li>
        <li>
          <p>
            Go to <a href="https://domains.google.com">domains.google.com</a> to
            buy the .dev domain. Its a bit cheaper than namecheap.
          </p>
          <ol>
            <li>Verify the domain by clicking the link in your emails.</li>
            <li>Leave this tab open for later.</li>
          </ol>
        </li>
        <li>
          <p>
            Go to <a href="https://github.com">GitHub</a> to create the repo.
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
            Go to <a href="https://www.gatsbyjs.org/">GatsbyJS</a>.
          </p>
          <ol>
            <li>
              <p>
                Open the{" "}
                <a href="https://www.gatsbyjs.org/docs/quick-start">
                  Quick start
                </a>
                .
              </p>
            </li>
            <li>
              <p>Open Terminal.</p>
            </li>
            <li>
              <p>
                cd to your personal dev folder <code>cd dev/personal</code>.
              </p>
            </li>
            <li>
              <p>Install the gatsby CLI.</p>
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
                cd into cadell.dev <code>cd cadell.dev</code>.
              </p>
            </li>
            <li>
              <p>
                Start gatsby <code>gatsby develop.</code>
              </p>
            </li>
            <li>
              <p>Open localhost:8000 in your browser.</p>
            </li>
            <li>
              <p>
                Close gatsby by typing <code>control + c</code>.
              </p>
            </li>
          </ol>
        </li>
        <li>
          <p>Open the github page you left open earlier.</p>
          <ol>
            <li>
              <p>
                Copy the command from the &quot;or push an exsting repository
                from the command line&quot; section. Gatsby created a git repo
                for us.
              </p>
            </li>
            <li>
              <p>Run the command in terminal.</p>
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
            Go to <a href="https://www.netlify.com/">Netlify</a>.
          </p>
          <ol>
            <li>Signup.</li>
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
            <li>
              Type in <code>cadell.dev</code>.
            </li>
            <li>Click Yes, add domain.</li>
            <li>Click Check DNS configuration.</li>
            <li>
              Now apparently we can either do the developer thing I spoke about
              earlier and setup the DNS in Google or get Netlify to manage our
              DNS. The latter will mean that we have the option to have{" "}
              <a href="https://www.netlify.com/docs/continuous-deployment/#branches-deploys">
                branch deploys under our domain
              </a>{" "}
              which sounds aesthetically better. We still get to configure name
              servers which is still pretty developery.
            </li>
            <li>Click Set up Netlify DNS for cadell.dev.</li>
            <li>Click Verify.</li>
            <li>Click Yes, add domain.</li>
            <li>
              Since Netlify will now be our DNS, we have the option to add DNS
              records if we use the domain for other services like email.
              Let&#39;s skip this since we aren&#39;t and can always do it
              later.
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
              <a href="https://cadell.dev/">https://cadell.dev/</a>.
            </li>
            <li>
              Apparently you can also{" "}
              <a href="https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default">
                choose a starter to start from
              </a>
              .
            </li>
          </ol>
        </li>
        <li>
          <p>Open VSCode.</p>
          <ol>
            <li>Open the cadell.dev folder.</li>
            <li>Hit Control+` to reveal the terminal.</li>
            <li>
              Create a new branch <code>git checkout -b FirstRealCommit</code>.
            </li>
            <li>
              Dilemna: do I use markdown and if I do should I use the other
              starter or add it manually? Stuff it let&#39;s just convert our
              markdown to html in typora so I can add cool stuff in code later.
              Still would be good to save the markdown though.
            </li>
            <li>
              Create the following folders, starting at the root.{" "}
              <code>content/blog/creating-cadell.dev</code>.
            </li>
            <li>Open Typora.</li>
            <li>
              Save the markdown file to{" "}
              <code>content/blog/creating-cadell.dev/index.md</code>.
            </li>
            <li>Click File, Export, HTML without styles.</li>
            <li>Open the file in VSCode.</li>
            <li>Copy the code inside the body.</li>
            <li>
              Run <code>yarn start</code> in the terminal to start the
              development server. This is standard for npm projects.
            </li>
            <li>
              Cmd+Click the{" "}
              <a href="http://localhost:8000/" target="_blank" class="url">
                http://localhost:8000/
              </a>{" "}
              link in terminal to open it in your browser.
            </li>
            <li>Open gatsby-config.js</li>
            <li>Change the siteMetadata.title to cadell.dev.</li>
            <li>
              Double click the index.js file under src/pages. The double click
              makes the tab &#39;sticky&#39;.
            </li>
            <li>
              Create a new file at{" "}
              <code>src/articles/creating-cadell.dev.js</code>.
            </li>
            <li>
              <code>rss</code> triggers the react snippets plugin in vscode,
              name it <code>CreatingCadellDev</code>.
            </li>
            <li>Paste your html inside the div.</li>
            <li>Right click, Format document to format the document.</li>
            <li>Go back to the index.js file we left open.</li>
            <li>
              Remove everything inside the Layout except for the SEO component.
            </li>
            <li>
              Start typing <code>&lt;CreatingCadellDev /&gt;</code> and click
              the autocomplete to import it.
            </li>
            <li>Click Save and watch the page update.</li>
            <li>Update the SEO component props as required.</li>
            <li>Command+Click the layout component to see how it works.</li>
            <li>Do the same for the Header component.</li>
            <li>
              Lets change the header colour by changing the style.background
              property of the &lt;header to <code>hsl(0, 90%, 70.4%)</code>.
            </li>
            <li>
              Click the Source Control tab on the left in VSCode and commit your
              work with the message <code>added the first page</code>.
            </li>
            <li>
              Click the cloud in the bottom left of VSCode to push the branch.
            </li>
            <li>
              We should be able to go to{" "}
              <a href="https://firstrealcommit--heuristic-jepsen-9bfaa6.netlify.com/">
                https://firstrealcommit--heuristic-jepsen-9bfaa6.netlify.com/
              </a>{" "}
              to see the result. Netlify built and deployed the branch
              automatically!
            </li>
            <li>Click Output then Git to see the push result.</li>
            <li>
              Command Click the pull request link to create a pull request.
            </li>
            <li>
              Click Create pull request. This will kick off Netlify again.
            </li>
            <li> Wait a few minutes for Netlify to build. </li>
            <li>Click the deploy preview to see the site.</li>
            <li>
              Click the drop down on the merge pull request then click Squash
              and merge.
            </li>
            <li>
              Go to <a href="https://cadell.dev/">https://cadell.dev/</a> and
              see the result.
            </li>
          </ol>
        </li>
      </ol>
      <p>Finish time: 9:00pm (2h 40m)</p>
    </div>
  )
}

export default CreatingCadellDev
