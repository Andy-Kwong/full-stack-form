# Instructions
Hello! We're excited you've reached this stage of the hiring process and can't wait to look at some of your code together.

**If this challenge is somehow prohibitive, please reach out and we'll discuss how we might otherwise assess your skills.**

Below are some sample iterative user stories (similar in style to those we use at Highland). Please complete each story in a separate branch and use pull requests to merge them into the primary branch (typically called master). See the images in this folder for mockups.

GitHub allows free private repos if you prefer not to have this on your public profile. Please invite Brad (GitHub user [sucitivel](https://github.com/sucitivel)) as an admin to the repo if you choose to make it private. He may provide other Highlanders access to the repo as well.

Please provide all necessary database migrations in order to create the required schema to run your application (users table, etc), and any necessary instructions to set up your application. We will set it up in a local container for testing.

On most projects, the team would review each story together and ask questions to ensure a shared understanding. If you have any questions, please email them to Brad (bzasada@highlandsolutions.com).

After you've finished, please email Katie-Sue to schedule time to discuss your work with a Highlander (kfisher@highlandsolutions.com).


## To-do
- [x] 💯 Nail the phone and technical interviews
- [ ] User stories OR let us know these are prohibitive
  - [ ] Email Brad with any questions (bzasada@highlandsolutions.com)
  - [ ] Structure and nav
  - [ ] Form - initial state
  - [ ] Form - successful submission
  - [ ] Form - error state
  - [ ] Form - delete confirmation
- [ ] Add GitHub user sucitivel as an admin if the repo is private
- [ ] Email Katie-Sue with availability to schedule a discussion of your work (kfisher@highlandsolutions.com)


---


# Structure and nav
As a user, I want to navigate the app.

I expect:

- the navbar to contain 3 working links: home (the "logo"), about, and contrived form.
- all pages to be blank (only the navbar should appear on each page).
- the active page's link to use a noticeably-lighter color.


# Form - initial state
As a user, I want to fill out a form.

I expect:

- a name field (text input).
- an email field (email input).
- a message field (textarea).
- a "delete my account" field (checkbox).
- a submit button.


# Form - successful submission
As a user, I want to know when my submissions are successful.

I expect:

- if I fill out all required fields and submit the form, a success message will appear in a modal.
- clicking the button in the success modal to return me to the blank home page.


# Form - error state
As a user, I want the form to validate my submission.

I expect:

- the name, email, and message fields to be required.
- to see errors inline with their respective fields.

Developer Notes:
In a real-world app, we'd almost certainly use the `required` attribute on the fields, but please validate with JavaScript only for this exercise.


# Form - delete confirmation
As a user, I want to be prompted to confirm account deletion.

I expect:

- if I check the "delete my account" box, the submission will not go through unless I confirm by clicking the "delete" button in a confirmation modal.
- the "cancel" button in the confirmation modal will dismiss the modal without submitting the form.
