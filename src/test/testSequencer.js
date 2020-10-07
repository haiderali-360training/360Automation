// testSequencer.js
const Sequencer = require("@jest/test-sequencer").default;


class CustomSequencer extends Sequencer {
    sort(tests) {

        for (const [key, value] of Object.entries(tests)) {
            console.log(`${key}: ${value}` + value.path);
        }
        // Test structure information
        // https://github.com/facebook/jest/blob/6b8b1404a1d9254e7d5d90a8934087a9c9899dab/packages/jest-runner/src/types.ts#L17-L21
        const copyTests = Array.from(tests);
        return copyTests.sort((testA, testB) => (testA.path > testB.path ? 1 : -1));
    }
}

module.exports = CustomSequencer;


/*
class CustomSequencer extends Sequencer {
    sort(tests) {

        const orderPath = [
            __dirname+"/lms/features/learner/learner_course_launch/lmsLearnerLaunchCourse.test.js",
            __dirname+"/lms/features/learner/learner_course_stats/lmsLearnerCourseStats.test.js",
            __dirname+"/lms/features/learner/learner_edit_preferences/lmsLearnerEditPreferences.test.js"
        ];
        return tests.sort((testA, testB) => {
            const indexA = orderPath.indexOf(testA.path);
            const indexB = orderPath.indexOf(testB.path);
            console.info(testA.path);
            console.info(testB.path);
            if (indexA === indexB) return 0; // do not swap when tests both not specify in order.

            if (indexA === -1) return 1;
            if (indexB === -1) return -1;
            return indexA < indexB ? -1 : 1;
        });
    }
}
module.exports = CustomSequencer;*/
