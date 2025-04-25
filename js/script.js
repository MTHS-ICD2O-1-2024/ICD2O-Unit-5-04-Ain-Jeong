// Copyright (c) 2025 Ain Jeong All rights reserved
//
// Created by: Ain Jeong
// Created on: Apr 2025
// This file contains the JS functions for index.html

/**
 * This function check user's age and the type of movie they can watch
 */
// eslint-disable-next-line no-unused-vars
function checkAge () {
  // input
  const userAge = parseFloat(document.getElementById('user-age').value)

  // process
  if (userAge >= 17) {
    // output
    document.getElementById('answer').innerHTML =
      'You can watch R movies alone.'
  } else if (userAge >= 13) {
    // output
    document.getElementById('answer').innerHTML =
      'You can watch PG-13 movies alone.'
  } else if (userAge >= 5) {
    // output
    document.getElementById('answer').innerHTML =
      'You can watch G or PG movies alone.'
  } else {
    // output
    document.getElementById('answer').innerHTML =
      'You are too young for most of the movies.'
  }
}
