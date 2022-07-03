function disabilityAmount(employee) {
  function isNotEligibleForDisability() {
    return (
      employee.seniority < 2 ||
      employee.monthsDisabled > 12 ||
      employee.isPartTime
    );
  }

  if (isNotEligibleForDisability(employee)) {
    return 0;
  }
  return 1;
}
