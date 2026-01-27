// 🧪 Given Data:
const user = {
    id: 101,
    name: "Ravi",
    preferences: {
        theme: "dark",
        language: "en"
    }
};

// 🎯 Task
// 1. Create a shallow copy of user
    const copyUser={...user}
    console.log("Copied User:");
    console.log(copyUser);

// 2. Change:
// i.name in the copied object

copyUser.name="Ram"
console.log("After changing name in copied user:");
console.log(copyUser.name);

// ii.preferences.theme in the copied object

copyUser.preferences.theme="light"
console.log("After changing theme in copied user:");
console.log(copyUser.preferences.theme)

// iii.Log both original and copied objects

console.log("Original User:");
console.log(user)
console.log("Copied User:");
console.log(copyUser)

// iv.Observe what changes and what doesn’t

console.log("what changes:")
console.log("Copied User Name:",copyUser.name);//changed
console.log("Copied User Theme:",copyUser.preferences.theme);//changed
console.log("what doesn't change:")
console.log("Original User Name:",user.name);//not changed
console.log("Original User Theme:",user.preferences.theme);//changed due to shallow copy
