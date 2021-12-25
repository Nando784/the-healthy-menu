import React from 'react'

import Card from '../components/Card'

export let populateCountryes = () => {
  let Countryes = [
    {
      id: 1,
      name: 'Africa',
      description: 'Well, a very hot place'
    },
    {
      id: 2,
      name: 'America',
      description: 'MMMMMMMURICA'
    },
    {
      id: 3,
      name: 'British',
      description: 'Ascolto DuaLipa sopra una Jeep'
    },
    {
      id: 4,
      name: 'Cajun',
      description: 'Is this Canada or French ?'
    },
    {
      id: 5,
      name: 'Caribbean',
      description: 'YOU ARE A PIRATE'
    },
    {
      id: 6,
      name: 'Chinese',
      description: 'This Food is so Democratic'
    },
    {
      id: 7,
      name: 'Eastern European',
      description: 'No pay tax and live like a rich'
    }/*
    1:"African",
    2:"American",
    3:"British",
    4:"Cajun",
    5:"Caribbean",
    6:"Chinese",
    7:"Eastern European",
    8:"European",
    9:"French",
    10:"German",
    "Greek",
    "Indian",
    "Irish",
    "Italian",
    "Japanese",
    "Jewish",
    "Korean",
    "Latin American",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Nordic",
    "Southern",
    "Spanish",
    "Thai",
    "Vietnamese",*/
  ]

  
  return(
    Countryes.map((country) =>
        <Card 
          key={country.id}
          image=""
          title={country.name}
          description={country.description}
        />
    )
  )

}