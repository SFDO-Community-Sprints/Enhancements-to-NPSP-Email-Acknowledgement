### Enhancements-to-NPSP-Email-Acknowledgement

### Project Description
Gathering requirements and if possible, building additional open source functionality to enhance the NPSP Email Acknowledgement functionality.

### Project Audience
All NPSP system administrators that would process email acknowledgements to donors (less than 5,000/day)

### Project Team

* Team Leader: Dean Rose
* List of Contributors: Kristen Strater

### Project Team Accomplishments
Gather requirements for product and Power of Us Hub documentation

### Contributing
We welcome contributions to this project. At present we need:

* Requirements: Gather additional needs from nonprofits who use email acknowledgement
* Solution design: Should this functionality continue as a workflow rule? Process builder? Flow?
* Developer: Create solution based on design

### Project Roadmap

Product

Allow the user to select additional email templates based on record type or a field on the Opportunity

Add a confirmation message (whether you are sending from an individual record or list view) that alerts prior to email send: "Your message will be send XX email addresses. Click OK to Confirm and send Message"

Documentation

Update Hub article to use all Lightning images (can use Trailhead unit: https://trailhead.salesforce.com/en/content/learn/modules/donation-management-basics-with-nonprofit-success-pack/acknowledge-a-donation)

Clarify that acknowledgement email will go to the (which) email address on the Contact record on Trailhead unit & Hub documentation.

Add considerations for using NPSP Email acknowledgement to Hub article
* platform email daily limit (5,000)  "List emails count against an org’s daily list email send limit, which is typically 5,000 emails per day. This limit doesn't include individual emails you send."

* multiple acknowledgement email types require filter to one record type only in list view "If a list view or multi-line view contains more than one record type, it can’t be edited inline. Edit your view so that it has only one record type to enable inline editing."
