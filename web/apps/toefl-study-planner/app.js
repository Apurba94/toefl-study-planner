/* TOEFL Study Planner: a week-by-week plan from your test date and weakest skills. */
(function () {
  'use strict';
  const AREAS = [
    { name: 'Reading', tasks: ['Complete the Words: 3 paragraphs a day', 'Two academic passages and two daily-life texts'] },
    { name: 'Listening', tasks: ['Listen and Choose a Response: 12 a day', 'One conversation and one talk with notes'] },
    { name: 'Speaking', tasks: ['Listen and Repeat: 10 sentences', 'One interview set and a journal entry'] },
    { name: 'Writing', tasks: ['Build a Sentence: 10 a day', 'One email and one academic discussion post'] },
    { name: 'Vocabulary and grammar', tasks: ['15 academic words a day', 'One grammar drill and one punctuation set'] },
  ];
  const App = {
    about: 'Tell the planner your TOEFL date, your weekly study hours and how confident you feel in reading, listening, speaking, writing and vocabulary. It gives each week a focus, more weeks for weaker skills, a final week of full practice, and daily tasks that point to the apps in this suite.',
    how: ['Set your test date and hours in **Plan**.', 'Rate each skill honestly.', 'Tick weeks off as you go and update your ratings as you improve.'],
    tabs: [{ id: 'plan', label: 'Plan', render(el) { SK.plannerView(el, { areas: AREAS }); } }],
    AREAS,
    checks: { 'the plan covers all five skills when they are equally weak': (data, assert) => {
      const plan = SK.planWeeks('2026-01-05', '2026-03-02', AREAS.map((a) => ({ name: a.name, weight: 3, tasks: a.tasks })), 8);
      assert.equal(plan.length, 8);
      for (const a of AREAS) assert.ok(plan.some((w) => w.focus === a.name), a.name);
    } },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = App; else SK.start(App);
})();
