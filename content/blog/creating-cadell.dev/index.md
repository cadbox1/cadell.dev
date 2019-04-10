# Creating cadell.dev

6:20pm 10/4/2019

Duration:  2h 40m while writing this post.

## Introduction

There was some [rave reviews](https://news.ycombinator.com/item?id=19615546) for Netlify on hackernews this morning. It really did sound awesome - static hosting with a CDN, branch deployments, [Netlify CMS](https://www.netlifycms.org/) and [Netlify Functions](https://www.netlify.com/docs/functions/) all for free.

Combined with my mate, Franc, telling me to snatch up cadell.dev led me to create this website and post.

The Netlify experience was fantastic! A few decisions along the way but overall very seamless.

The biggest decision to make was how to use Gatsby - should I use the blog starter pack or the basic starter pack. This was a bit of a time sink. I opted for the base starter pack and manual markdown file conversions for now.

## Method

1. Open [Typora]([https://typora.io/) so you can write your first blog post as you go.

2. Go to [domains.google.com](https://domains.google.com) to buy the .dev domain. Its a bit cheaper than namecheap.

   1. Verify the domain by clicking the link in your emails.
   2. Leave this tab open for later.

3. Go to [GitHub](https://github.com) to create the repo.

   1. Click the plus on the top right corner, then go New repository.
   2. Name it cadell.dev.
   3. Click Create Repository.
   4. Leave the tab open.

4. Go to [GatsbyJS](https://www.gatsbyjs.org/).

   1. Open the [Quick start](https://www.gatsbyjs.org/docs/quick-start).

   2. Open Terminal.

   3. cd to your personal dev folder ```cd dev/personal```.

   4. Install the gatsby CLI.

   5. ```shell
      npm install -g gatsby-cli
      ```

   6. Create the site. 

      ```gatsby new cadell.dev ```

   7. cd into cadell.dev ```cd cadell.dev```.

   8. Start gatsby ```gatsby develop.```

   9. Open localhost:8000 in your browser.

   10. Close gatsby by typing ```control + c```.

5. Open the github page you left open earlier.

   1. Copy the command from the "or push an exsting repository from the command line" section. Gatsby created a git repo for us.

   2. Run the command in terminal.

      ```shell
      git remote add origin https://github.com/cadbox1/cadell.dev.git
      git push -u origin master
      ```

   3. Refresh the github page to see the files from our first commit.

6. Go to [Netlify](https://www.netlify.com/).

   1. Signup.
   2. Activate your account via email to get in (I like this).
   3. On the Create a new site page, Click connect to Git provider.
   4. Click GitHub.
   5. Auhtorize Nelify by Netlify to access your GitHub account.
   6. Select the cadell.dev repo.
   7. Click Install.
   8. Select the cadell.dev repo in Netlify.
   9. Netlify has automatically detected that our site is a Gatsby site. Click Deploy site.
   10. Wait a few moments for the site to be deployed.
   11. Click Set up a custom domain. Apparently you can buy the domain inside Netlify, for ~$5 aud extra. Oh well, setting up DNS is somewhat related to being a web developer.
   12. Type in ```cadell.dev```.
   13. Click Yes, add domain.
   14. Click Check DNS configuration.
   15. Now apparently we can either do the developer thing I spoke about earlier and setup the DNS in Google or get Netlify to manage our DNS. The latter will mean that we have the option to have [branch deploys under our domain](https://www.netlify.com/docs/continuous-deployment/#branches-deploys) which sounds aesthetically better. We still get to configure name servers which is still pretty developery.
   16. Click Set up Netlify DNS for cadell.dev.
   17. Click Verify.
   18. Click Yes, add domain.
   19. Since Netlify will now be our DNS, we have the option to add DNS records if we use the domain for other services like email. Let's skip this since we aren't and can always do it later.
   20. Click Continue.
   21. Open up the Google Domains tab we left open from earlier.
   22. Click Use custom name servers for your domain.
   23. Click User custom name servers.
   24. Enter each one of the Netlify name servers.
   25. Click Save.
   26. Click Change name servers anyway when prompted with a scary DNSSEC warning.
   27. Open the Netlify tab.
   28. Click Done.
   29. Refresh the page after a few moments to make the DNS warnings go away.
   30. Scroll down to HTTPS, click Verify DNS Configuration.
   31. Scroll up to Branch subdomains, click Deploy settings panel.
   32. Under Deploy contexts, click Edit settings.
   33. Select All for Branch deploys.
   34. Click Save.
   35. Click on Domain management to see that our SSL certificate has been created.
   36. We can now go to [https://cadell.dev/](https://cadell.dev/).
   37. Apparently you can also [choose a starter to start from](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default).

7. Open VSCode.

   1. Open the cadell.dev folder.
   2. Hit Control+` to reveal the terminal.
   3. Create a new branch ```git checkout -b FirstRealCommit```.
   4. Dilemna: do I use markdown and if I do should I use the other starter or add it manually? Stuff it let's just convert our markdown to html in typora so I can add cool stuff in code later. Still would be good to save the markdown though.
   5. Create the following folders, starting at the root. ```content/blog/creating-cadell.dev```.
   6. Open Typora.
   7. Save the markdown file to ```content/blog/creating-cadell.dev/index.md```.
   8. Click File, Export, HTML without styles.
   9. Open the file in VSCode.
   10. Copy the code inside the body.
   11. Run ```yarn start``` in the terminal to start the development server. This is standard for npm projects.
   12. Cmd+Click the http://localhost:8000/ link in terminal to open it in your browser.
   13. Open gatsby-config.js
   14. Change the siteMetadata.title to cadell.dev.
   15. Double click the index.js file under src/pages. The double click makes the tab 'sticky'.
   16. Create a new file at ```src/articles/creating-cadell.dev.js```.
   17. ```rss``` triggers the react snippets plugin in vscode, name it ```CreatingCadellDev```.
   18. Paste your html inside the div.
   19. Right click, Format document to format the document.
   20. Go back to the index.js file we left open.
   21. Remove everything inside the Layout except for the SEO component.
   22. Start typing ```<CreatingCadellDev />``` and click the autocomplete to import it.
   23. Click Save and watch the page update.
   24. Update the SEO component props as required.
   25. Command+Click the layout component to see how it works.
   26. Do the same for the Header component.
   27. Lets change the header colour by changing the style.background property of the <header to ```hsl(0, 90%, 70.4%)```.
   28. Click the Source Control tab on the left in VSCode and commit your work with the message ```added the first page```.
   29. Click the cloud in the bottom left of VSCode to push the branch.
   30. We should be able to go to [https://firstrealcommit--heuristic-jepsen-9bfaa6.netlify.com/](https://firstrealcommit--heuristic-jepsen-9bfaa6.netlify.com/) to see the result. Netlify built and deployed the branch automatically!
   31. Click Output then Git to see the push result.
   32. Command Click the pull request link to create a pull request.
   33. Click Create pull request. This will kick off Netlify again.
   34.  Wait a few minutes for Netlify to build. 
   35. Click the deploy preview to see the site.
   36. Click the drop down on the merge pull request then click Squash and merge.
   37. Go to [https://cadell.dev/](https://cadell.dev/) and see the result.

Finish time: 9:00pm (2h 40m)

