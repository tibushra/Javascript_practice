const studentIntroduction = (student) => {

    if (typeof student !== "object" || student === null) {
        return "Invalid";
    }

    const keys = Object.keys(student);
    if (!keys.includes("name") || !keys.includes("age") || !keys.includes("course")) {
        return "Invalid";
    }

    return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`
}


const filterActiveUsers = (users) => {
    if (!Array.isArray(users) || users.length === 0) {
        return "Invalid";
    }


    if (!users.every(element =>
        typeof element === "object" &&
        element !== null &&
        Object.keys(element).includes("isActive"))) {
        return "Invalid";
    }


    let activeUser = users.filter(element => element.isActive === true);
    return activeUser;
}


const countHashtags = (caption) => {
    if (typeof caption !== "string") {
        return "Invalid";
    }

    let words = caption.split(" ");

    let hashtags = words.filter(word => word.startsWith("#"));

    let longestTag = "";

    hashtags.forEach(hashtag => {
        const tag = hashtag.slice(1);
        if (tag.length > longestTag.length) {
            longestTag = tag;
        }
    });

    return { hashtagCount: hashtags.length, longestTag: longestTag };
}


const bonusScore = (scores) => {

    if (!Array.isArray(scores) || scores.length === 0) {
        return "Invalid";
    }

    for (let i = 0; i < scores.length; i++) {
        if (typeof scores[i] !== "number") {
            return "Invalid";
        }
    }

    let total = scores.map(element => element + 10).reduce((accumolator, elem) => accumolator + elem, 0);
    return total;
}


const generateLeaderboard = (students) => {
    if (!Array.isArray(students)) {
        return "Invalid";
    }

    if (students.length === 0) {
        return "Invalid";
    }

    if (!students.every(element =>
        typeof element === "object" &&
        element !== null &&
        Object.keys(element).includes("name") &&
        Object.keys(element).includes("score") &&
        typeof element.score === "number")) {
        return "Invalid";
    }

    const qualified = students.filter(student => {
        return student.score >= 70;
    });

    const names = qualified.map(({ name }) => {
        return name.toUpperCase();
    });

    return names.slice(0, 3);
}