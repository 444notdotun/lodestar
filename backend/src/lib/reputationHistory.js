// Reputation history — in-memory store.
// Kept dependency-free so it's unit-testable.

const reputationHistory = new Map();

export function recordReputationChange(serviceId, timestamp, delta, newValue) {
  if (!reputationHistory.has(serviceId)) {
    reputationHistory.set(serviceId, []);
  }
  const history = reputationHistory.get(serviceId);
  history.unshift({
    timestamp,
    delta,
    newValue,
  });
}

export function getReputationHistory(serviceId) {
  return reputationHistory.get(serviceId) || [];
}
