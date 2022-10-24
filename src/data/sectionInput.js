const sectionInput = [
  {
    label: "Nom de famille",
    value: name,
    onChange: (text) => setName(text),
  },
  {
    label: "Prénom",
    value: surName,
    onChange: (text) => setSurName(text),
  },
  {
    label: "Nom d’Utilisateur",
    value: username,
    onChange: (text) => setUsername(text),
  },
];

export { sectionInput };
