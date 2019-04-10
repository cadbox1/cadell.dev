# Creating cadell.dev

6:20pm 10/4/2019

1. Open https://typora.io/ so you can write your first blog post as you go.

2. Go to https://domains.google.com to buy the .dev domain. Its a bit cheaper than namecheap.

   1. Verify the domain by clicking the link in your emails.
   2. Leave this tab open for later.

3. Go to https://github.com to create the repo.

   1. Click the plus on the top right corner, then go New repository.
   2. Name it cadell.dev.
   3. Click Create Repository.
   4. Leave the tab open.

4. Go to https://www.gatsbyjs.org/

   1. https://www.gatsbyjs.org/docs/quick-start

   2. Open Terminal.

   3. cd to your personal dev folder. ```cd dev/personal```

   4. Install the gatsby CLI

   5. ```shell
      npm install -g gatsby-cli
      ```

   6. Create the site. 

      ```gatsby new cadell.dev ```

   7. cd into cadell.dev ```cd cadell.dev```

   8. start gatsby ```gatsby develop```

   9. Open localhost:8000 in your browser

   10. close gatsby by clicking control+c

5. Open the github page you left open earlier

   1. Copy the command from the "or push an exsting repository from the command line" section. Gatsby created a git repo for us.

   2. run the command in terminal

      ```shell
      git remote add origin https://github.com/cadbox1/cadell.dev.git
      git push -u origin master
      ```

   3. Refresh the github page to see the files from our first commit.

6. Go to https://www.netlify.com/

   1. Signup
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
   12. Type in cadell.dev
   13. Click Yes, add domain.
   14. Click Check DNS configuration.
   15. Now apparently we can either do the developer thing I spoke about earlier and setup the DNS in Google or get Netlify to manage our DNS. The latter will mean that we can have branch deploys under our domain which sounds aesthetically better. https://www.netlify.com/docs/continuous-deployment/#branches-deploys. We still get to configure name servers which is still pretty developery
   16. Click Set up Netlify DNS for cadell.dev
   17. Click Verify
   18. Click Yes, add domain.
   19. Since Netlify will now be our DNS, we have the option to add DNS records if we use the domain for other services like email. Let's skip this since we can always do it later.
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
   36. We can now go to https://cadell.dev/
   37. Apparently you can also choose a starter to setup a git repo for us https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default

7. Open VSCode.

   1. Open the cadell.dev folder.
   2. Hit Control+` to reveal the terminal.
   3. Create a new branch ```git checkout -b FirstRealCommit```
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
   28. 

