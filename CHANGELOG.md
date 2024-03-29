# (Unreleased; add upcoming change notes here)

# 0.20.3 (2021-03-20)

- Warn about iodide potentially going away in the future (#3081)
- Wait for database before running migrations (#2935)
- Switched to the jsDelivr CDN for pyodide 0.15.0 (#3020)

# 0.20.2 (2020-07-16)

- Allow new windows opened from iodide to submit forms (#2919)

# 0.20.1 (2020-05-28)

- Fix one last case where the user might be warned unnecessarily when navigating
  away from iodide (#2884)

# 0.20 (2020-05-23)

- Allow creating iodide notebook with attached files via a POST request, using
  a new `/from-template/` endpoint (fixes #2681) (#2849)
- Don't warn unnecessarily when navigating away from a notebook (fixes #2537) (#2855)
- Allow attaching files to a trial notebook (or when unauthenticated) (fixes #2680) (#2727)
- Use pyodide v0.15, fetching from cloudflare CDN (#2874)

# 0.19.1 (2020-04-06)

- GitHub authentication no longer uses URL query parameters (fixes #2682) (#2751)

# 0.19.0 (2020-03-03)

- Can now specify notebook iomd via a URL parameter with new or
  tryit endpoints (fixes #2565) (#2676)
- Always show "Clear history" button in the Console dropdown (#2707)
- Fix plugin cell parsing (#2721)

# 0.18.0 (2020-01-22)

- Center "Help" and "Play" icons in some browsers (fixes #2567) (#2570)
- Handle cases where coalescing revisions results in no change (fixes #2517)
- Allow users to make a copy of any notebook (fixes #1621) (#2593)
- Allow viewing files when not logged in (fixes #2562) (#2575)

# 0.17.0 (2019-12-19)

- Further refine escaping iomd returned by iodide server (#2526)
- Add autocomplete for JS and language plugins (Pyodide working POC) (#2539)
- Add `bytes` fetch to fetch chunks (see docs) (fixes #1786) (#2550)

# 0.16.1 (2019-12-05)

- Unescape hexadecimal quotes in iomd (fixes #2524) (#2525)

# 0.16.0 (2019-12-05)

- Remove redundant description metadata for link previews (#2448)
- Vertically align text in language selector(fixes #2446)
- Allow running simple-serve from a port other than 8000 (fixes #2444)
- Allow blank content on notebook revision creation (fixes #2445) (#2455)
- Enable user to clear console history with a click (fixes #1015) (#2453)
- Report more specific errors in console when executing fetch cell (fixes #1853) (#2475)
- Better onboarding around the use of the "run all" button (#2471)
- Automatically prune revision history (fixes #2451) (#2461)

# 0.15.1 (2019-11-06)

- Await script load before continuing evaluation in iodide (fixes #1278) (#2411)

# 0.15.0 (2019-11-04)

- Use Spinach task scheduler instead of Celery: simpler, and eliminates the need for a worker beat node (#2381)
- Fix reps bug involving proxies (#2254, #2237, #1748) (#2395)
- Use Monaco for displaying diffs (fixes #2275, #2260) (#2334)
- Use webpack production mode for building iodide (fixes #2023) (#2402)

# 0.14.0 (2019-10-24)

- Add test coverage reporting with Codecov. (#2322)
- Fix use of naive datetime in favor of timezone-aware datetime objects. (#2323)
- Collect email addresses from github logins (#2329)
- Allow users to drop files onto the homepage to create a new notebook with
  those files attached (#2133)
- Add appropriate metadata so that Iodide links have a preview card when shared
  on social media sites (#2344)
- Ignore unknown properties for language plugins (fixes #2215)

# 0.13.0 (2019-10-01)

- Extend Python test harness to run linting and coverage as part of test suite (#2305)
- Fix coloring of history modal's title (#2301)
- Increase maximum length of file source URLs from 200 to 8192 (#2314)
- Fix console warning by switching from react-helmet to react-helmet-async (#2315)

# 0.12.0 (2019-09-25)

- Fix spurious "unsaved changes" changeset in revision browser (#2259)
- Adds a new feature, file sources, which allows notebook authors to schedule
  the fetching of files from URLs. This feature is available in the notebook menu
  (click _Menu > Manage Files_) (#1985)
- Add multi stage docker builds for smaller docker images (#2156)
- Fixed a bug where script tags aren't being rendered properly that could lead
  to arbitrary code execution attacks (#2193)
- Fixes warnings caused by outdated version of Emotion (#2244)

# 0.11.0 (2019-08-21)

- Removed iodide.environment API (#2038)
- Add back local-only dev mode using command "npm run simple-serve" (#2024)
- Iodide docker container no longer hardcodes server hostnames, can
  reuse in multiple server environments (#1943)
- Hide "unsaved changes" in revision browser if no unsaved changes (#2046)
- Show revision, docs, contribute links even on non-public sites
- Disable "History" menu item for the tryit notebook (#2125)
- Add documentation for how the Iodide server's authentication system work (#2091)
- Migrated to Monaco editor, providing several text editing improvements (find/replace text; autocomplete, including hits for Iodide custom chunk types; etc) (#2117)
- Add "restore" functionality for revision browser (#2047)

# 0.10.0 (2019-07-15)

- Overhauls Iodide's data formatters to cover more data types, allow folding of long results, and many other enhancements
- Deprecates the need for the `files/` prefix in fetch chunks.
- Introduces the `plugin` fetch type in fetch chunks.
- No longer swallowing errors in plugin loader code (fixes #2010)

# 0.9.0 (2019-07-03)

- Reduce the image size for small user icons, to improve loading times (fixes #1711)
- Fix loading revision browser when authentication credentials are required
  for read-only API endpoints (partially fixes #1965)
- Fix authentication hole in files api validation that would allow any logged-in
  user to modify or create a file on another's behalf.

# 0.8.0 (2019-06-18)

- Adds favicon to iodide (fixes #826)
- Adds JWT-based authentication to Iodide's API as an option (fixes #1755)
- Rebrand the "jsmd" file format as "iomd" (fixes #1634)
- Adds ability to restrict server API to authenticated users only
  (disallowing read-only API access; fixes #1879)
- Gravatars are served via https by default (fixes #1930)
- Add new file management UI (click _Menu > Manage Files_ while logged in and
  viewing a notebook that you own)

# 0.7.0 (2019-05-30)

- Better behaviour around saving, especially when multiple copies
  of a notebook are open simultaneously. Note that as part of this
  work, iodide will no longer save in (unsupported) standalone mode.
  We may add this back at a future date.
- Detect case where server logged out either due to user intervention
  or session expiry, and offer to recover (fixes #1680)
- Titles are now autosaved locally (fixes #1599)
- Pyodide is now deployed separately, so will be on a different update
  cadence than Iodide.

# 0.6.0 (2019-05-06)

- introduces iodide.file API (see docs)
- restore tabular data viewer for arrays of objects
- add "TinyRep" components
- implement `storybook` for visually testing rep components
- only show notebooks with 10 or more edits on the server's index page list
- fixes bug where fetch chunks with errors don't halt further evaluation
- adds `arrayBuffer` type to fetch chunks (see docs)
- fix bug where you couldn't save a notebook after forking it

# 0.5.0 (2019-03-28)

- allow suitably authorized users to create notebooks on behalf of others
- add optional [token-based authentication](https://www.django-rest-framework.org/api-guide/authentication/#tokenauthentication)
  for accessing iodide's API endpoints without a github or openidc session.
- Pyodide has been upgraded to version 0.10.0. This includes the new packages:
  `html5lib`, `pygments`, `beautifulsoup4`, `soupseive`, `docutils`, `bleach`
- disable automatic saving and interactivity if viewing an out of
  date copy of the notebook (#1593)
- use maintained `markdown-it-katex` package
- automatically flush any pending notebook saves to the server if the
  user is navigating away from the iodide tab
- Fix an unlikely race condition where a notebook is found to be out
  of date inside the throttle interval of a server autosave

# 0.4.0 (2019-03-09)

- iodide notebooks now automatically save to the server
- fix bug where we showed incorrect revision save times in history viewer,
  also show revision save time down to the second level
- alpha now less extreme
- improve title for user page when no first or last name is given

# 0.3.0 (2019-03-06)

- don't show "new notebook" button on user pages that don't belong to
  the currently logged in one
- add docs link to footer on server pages
- set default document position to (row 1, column 1) on startup (#1568)
- displays owner name in header message when viewing a notebook you do not own
- randomly generate initial notebook names (based on a list of iodide compounds) (#1541)
- don't allow the creation of "empty" revisions on the server

# 0.2.0 (2019-02-28)

- separates out evaluation inputs and outputs in the console and provides a standard set of console elements
- server backend: switch away from pipenv to requirements files
- add a history viewer in notebook
- redesign / refactor of console entries
- fix bug where user would be prompted to save a notebook they already own after logging in
- add link to github from user pages
- add document-level titles to all pages returned by the iodide server

# 0.1.0 (2019-02-21)

- fixes the production bug where JSS styles (material-ui) come after emotion styles
- move reps to react inspector
- change nomenclature around user output reps _including in API_ (**breaking change**)
- removed errant "0" in landing page
- plugins now throw network errors to the iodide console and catch syntax errors within plugin loaders
- implements a language selector menu on the right side of the console input

# 0.0.3 (2019-02-04)

First pre-alpha tagged release.
