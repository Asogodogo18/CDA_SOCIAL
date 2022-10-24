import { View,  } from 'react-native'
import React, { useState } from 'react'
import Box from '../shared/Box'
import Text from '../shared/Text'
import { SectionInput } from '../'

import  SectionInputs  from '../../data/sectionInput'
const Infos = () => {
  const [name, setName] = useState("Doe");
  const [surName, setSurName] = useState("John");
  const [username, setUsername] = useState("@JohnDoe");

  const data = [
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
  return (
    <Box backgroundColor={"red"} flex={1} justifyContent={'center'} alignItems={'center'}>
     <SectionInput data={data} title='Nom dutilise' />
    </Box>
  )
}

export default Infos