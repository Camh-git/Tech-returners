// Instructions can be found in imperative_vs_declarative.md

export function longPasswords(passwords) {
  passwords = passwords.filter((password) => {
    if (password.length >= 9) {
      return true;
    }
  });

  return passwords;
}
