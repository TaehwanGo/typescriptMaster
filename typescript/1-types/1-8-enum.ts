{
  /**
   * Enum
   */
  // Javascript엔 없음 => Object.freeze로 구현 가능
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  enum Days {
    Monday = 1, // 0
    Tuesday, // 1
    Wednesday,
    Thursday,
    Friday,
    Saturday, // 5
    Sunday,
  }

  console.log(Days.Monday);
  const day = Days.Saturday;
  console.log(day);

  // Union type is better
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
  let dayOfWeek: DaysOfWeek = 'Tuesday';
}
