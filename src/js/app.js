export default class Validator {
  validateUsername(user) {
    this.user = user;
    return !/^[0-9_-]/.test(user) && !/[0-9]{4,}/.test(user) && !/[0-9_-]$/.test(user) && /[\w+-]/.test(user);
  }
}
