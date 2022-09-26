var planFeatures = [
	{
		category: "Channel Features",
		feature : "Workflow Builder",
		details : "No code tool to automate common workflows - includes pre built templates.",
		lowestAvailablePlan : "Pro",
		isIntegration: false
	},
	{
		category: "Channel Features",
		feature: "Message Activity",
		details: "Ability to see engagement stats on messages",
		lowestAvailablePlan: "Business Plus",
		isIntegration: false
	},
	{
		category: "Channel Features",
		feature: "Multi-Workspace Channels",
		details: "Connect multiple workspaces together.",
		lowestAvailablePlan: "Enterprise Grid",
		isIntegration: false
	},
	{
		category: "Administration at Scale",
		feature: "Granular Admin Roles (aka System Roles)",
		details: "Assign admin users but just with specific abilities.",
		lowestAvailablePlan: "Enterprise Grid",
		isIntegration: false
	},
	{
		category: "Administration at Scale",
		feature: "Centralized Channel Management",
		details: "Edit all channels from one central Dashboard.",
		lowestAvailablePlan: "Business Plus",
		isIntegration: false
	},
	{
		category: "Administration at Scale",
		feature: "Admin APIs",
		details: "Automate org/workspace/app mgmt",
		lowestAvailablePlan: "Enterprise Select",
		isIntegration: false
	},
	{
		category: "Administration at Scale",
		feature: "Custom Data Retention",
		details: "Applies to public/private channels, DMs and files. Lifetime by default.",
		lowestAvailablePlan: "Pro",
		isIntegration: false
	},
	{
		category: "Identity and Device Management",
		feature: "SAML SSO",
		details: "Pre-built connectors w/ many IDPs.",
		lowestAvailablePlan: "Business Plus",
		isIntegration: true
	},
	{
		category: "Identity and Device Management",
		feature: "Multi-SAML SSO",
		details: "Multiple SSO Providers connected to the same Grid Org.",
		lowestAvailablePlan: "Enterprise Grid",
		isIntegration: true
	},
	{
		category: "Identity and Device Management",
		feature: "SCIM API",
		details: "Create/deactivate members, sync & update profile fields, create/delete user groups & sync info from IDP.",
		lowestAvailablePlan: "Business Plus",
		isIntegration: true
	},
	{
		category: "Identity and Device Management",
		feature: "SCIM API (Guest Provisioning)",
		details: "Provision and manage Multi-Channel Guest accounts in bulk.",
		lowestAvailablePlan: "Enterprise Grid",
		isIntegration: true
	},
	{
		category: "Identity and Device Management",
		feature: "IDP Groups",
		details: "Auto-assign groups of users to Workspace",
		lowestAvailablePlan: "Enterprise Grid",
		isIntegration: true
	},
	{
		category: "Identity and Device Management",
		feature: "Session Management",
		details: "Logout user on a specific device (also available via the Admin API)",
		lowestAvailablePlan: "Enterprise Select",
		isIntegration: false
	},
	{
		category: "Identity and Device Management",
		feature: "Domain Claiming",
		details: "Prevent unsanctioned workspace creation.",
		lowestAvailablePlan: "Enterprise Grid",
		isIntegration: false
	},
	{
		category: "Identity and Device Management",
		feature: "Mobile Device Management (MDM)",
		details: "MDM Via App Config vendor.",
		lowestAvailablePlan: "Enterprise Grid",
		isIntegration: true
	},
	{
		category: "Identity and Device Management",
		feature: "Mobile Application Management (MAM)",
		details: "App-specific mobile controls. Only available with Microsoft Intune.",
		lowestAvailablePlan: "Enterprise Grid",
		isIntegration: true
	},
	{
		category: "Identity and Device Management",
		feature: "Native Slack Mobile Controls (Non EMM)",
		details: "Block download/copy, block jailbroken/rooted devices, default browser control, secondary auth",
		lowestAvailablePlan: "Enterprise Grid",
		isIntegration: false
	},
	{
		category: "Identity and Device Management",
		feature: "User Groups",
		details: "Add user groups in Slack to for @ mentioned",
		lowestAvailablePlan: "Pro",
		isIntegration: false
	},
	{
		category: "Identity and Device Management",
		feature: "Domain Claining",
		details: "Prevent unsanctioned workspace creation.",
		lowestAvailablePlan: "Enterprise Grid",
		isIntegration: false
	},
	{
		category: "Data Protection & Information Governance",
		feature: "EKM (Enterprise Key Management)",
		details: "Customers manage their encryption keys with granular control.",
		lowestAvailablePlan: "Enterprise Grid",
		isIntegration: false,
		isAddOn: true
	},
	{
		category: "Data Protection & Information Governance",
		feature: "Legal Holds",
		details: "Put user(s) on a legal hold so that their data is preserved.",
		lowestAvailablePlan: "Enterprise Grid",
		isIntegration: false
	},
	{
		category: "Data Protection & Information Governance",
		feature: "Information Barriers",
		details: "Prevent groups of users from DMing each other.",
		lowestAvailablePlan: "Enterprise Grid",
		isIntegration: false
	},
	{
		category: "Data Protection & Information Governance",
		feature: "DLP (Data Loss Prevention)",
		details: "Enforce CASB policies to scan/block content within messages and files. ",
		lowestAvailablePlan: "Enterprise Select",
		isIntegration: true
	},
	{
		category: "Data Protection & Information Governance",
		feature: "Native DLP (Slack Connect only)",
		details: "Native DLP preferences that are controlled from the Org dashboard that affect Slack Connect channels only. ",
		lowestAvailablePlan: "Enterprise Grid",
		isIntegration: false
	},
	{
		category: "Data Protection & Information Governance",
		feature: "Audit Log API",
		details: "Connect to SIEM tools or database. **No OOTB integration for any 3rd party",
		lowestAvailablePlan: "Enterprise Select",
		isIntegration: false
	},
	{
		category: "Data Protection & Information Governance",
		feature: "eDiscovery Archiving",
		details: "Pull messages & files into 3rd party data storage for legal/compliance/storage",
		lowestAvailablePlan: "Enterprise Select",
		isIntegration: true
	},
	{
		category: "Data Protection & Information Governance",
		feature: "Data Exports - All Data",
		details: "All channels and conversations including private Channels, DMs and MPDMs",
		lowestAvailablePlan: "Business Plus",
		isIntegration: false
	},
	{
		category: "Data Protection & Information Governance",
		feature: "Data Exports - Single User Exports",
		details: ".TXT human readable format or JSON file. All messages and links to files.",
		lowestAvailablePlan: "Enterprise Select",
		isIntegration: false
	},
	{
		category: "Data Protection & Information Governance",
		feature: "Data Exports - Org Level Dashboard",
		details: "Granularity for exports across Grid workspaces ",
		lowestAvailablePlan: "Enterprise Grid",
		isIntegration: false
	},
	{
		category: "Data Protection & Information Governance",
		feature: "Custom Terms of Service",
		details: "Link to corporate policies, legal or internal info sources",
		lowestAvailablePlan: "Enterprise Grid",
		isIntegration: false
	},
	{
		category: "Data Protection & Information Governance",
		feature: "Whitelisting Workspaces",
		details: "Use an SSL proxy to prevent anyone on your network from signing in to a non-whitelisted workspace.",
		lowestAvailablePlan: "Business Plus",
		isIntegration: false
	},
	{
		category: "Data Protection & Information Governance",
		feature: "Data Residency",
		details: "Give global teams increased control over where your data is stored.",
		lowestAvailablePlan: "Business Plus",
		isIntegration: false
	},
	{
		category: "Data Protection & Information Governance",
		feature: "Flag Messages",
		details: "Users can flag inappropriate messages for the admin team to review and delete.",
		lowestAvailablePlan: "Enterprise Grid",
		isIntegration: false
	},
	{
		category: "Data Protection & Information Governance",
		feature: "Lock Threads",
		details: "Admins can prevent new messages being posted into a thread",
		lowestAvailablePlan: "Enterprise Grid",
		isIntegration: false
	}
]


// GENERAL iterate through the plans to filter out different features
planFeatures.forEach(function (i) {
    console.log(i.category);
});


//upgrade from pro to business plus
var proToPlus = [];

planFeatures.forEach(function (feature) {
	if (feature.lowestAvailablePlan == "Business Plus")
    proToPlus.push(feature.feature);
	return proToPlus;
});

//upgrade from business plus to enterprise select
var plusToSelect = [];

planFeatures.forEach(function (feature) {
	if (feature.lowestAvailablePlan == "Enterprise Select")
    plusToSelect.push(feature);
	return plusToSelect;
});

//upgrade from business plus to enterprise grid
var plusToGrid = [];

planFeatures.forEach(function (feature) {
	if (feature.lowestAvailablePlan == "Enterprise Select" || feature.lowestAvailablePlan == "Enterprise Grid")
    plusToGrid.push(feature.feature);
	return plusToGrid;
});

//upgrade from business plus to enterprise grid
var selectToGrid = [];

planFeatures.forEach(function (feature) {
	if (feature.lowestAvailablePlan == "Enterprise Grid") {
	selectToGrid.push(feature.feature, feature.details); }
	return selectToGrid;
});