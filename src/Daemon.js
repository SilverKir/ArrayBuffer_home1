import { Character } from './Character';

export default class Daemon extends Character {
    constructor(name) {
        super(name, 'Daemon', 100, 1, 50, 100);
    }
}