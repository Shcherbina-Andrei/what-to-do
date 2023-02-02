export const checkDateIsOverdue = (deadlineDate: string): boolean => {
  const currentDate = new Date();
  const deadline = new Date (deadlineDate);
  if (currentDate.getFullYear() >= deadline.getFullYear() && currentDate.getMonth() >= deadline.getMonth() && currentDate.getDate() >= deadline.getDate()) {
    return true;
  }

  return false;
};
