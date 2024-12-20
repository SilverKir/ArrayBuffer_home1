import Daemon from '../Daemon';

const daemon = new Daemon('Daemon');
test('Daemon initial parameters', () => {
    expect(daemon.attack).toBe(50);
    expect(daemon.stoned).toBe(false);
});

test.each([
    [1, 50],
    [2, 45],
    [3, 40],
    [4, 35],
    [5, 30],
    [6, 25],
    [7, 20],
    [8, 15],
    [9, 10],
    [10, 5],
    [11, 0],
    [12, 0]
])('Daemon attack with distance %i (not stoned)', (distance, attack) => {
    daemon.stoned = false;
    expect(daemon.getAttack(distance)).toBeCloseTo(attack);
});

test.each([
    [1, 50],
    [2, 40],
    [4, 25],
    [6, 12.075],
    [8, 0],
    [9, 0],

])('Daemon attack with distance %i (stoned)', (distance, attack) => {
    daemon.stoned = true;
    expect(daemon.getAttack(distance)).toBeCloseTo(attack);
});
