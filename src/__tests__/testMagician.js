import Magician from '../Magician';

const magitian = new Magician('Mag');
test('Daemon initial parameters', () => {
    expect(magitian.attack).toBe(100);
    expect(magitian.stoned).toBe(false);
});

test.each([
    [1, 100],
    [2, 90],
    [3, 80],
    [4, 70],
    [5, 60],
    [6, 50],
    [7, 40],
    [8, 30],
    [9, 20],
    [10, 10],
    [11, 0],
    [12, 0]
])('Magitian attack with distance %i (not stoned)', (distance, attack) => {
    magitian.stoned = false;
    expect(magitian.getAttack(distance)).toBeCloseTo(attack);
});

test.each([
    [1, 100],
    [2, 85],
    [4, 60],
    [8, 15],
    [10, 0],
    [11, 0],

])('Magitian attack with distance %i (stoned)', (distance, attack) => {
    magitian.stoned = true;
    expect(magitian.getAttack(distance)).toBeCloseTo(attack);
});
