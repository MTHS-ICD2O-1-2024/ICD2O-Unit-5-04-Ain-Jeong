// Copyright (c) 2025 Ain Jeong All rights reserved
//
// Created by: Ain Jeong
// Created on: Apr 2025
// This file contains the JS functions for index.html

/**
 * This function check user's age and the type of movie they can watch
 */
// eslint-disable-next-line no-unused-vars
function checkPrice () {
  // input
  const userAge = parseFloat(document.getElementById('user-age').value)
  const day = document.getElementById('day').value

  // process
  if (
    (userAge <= 21 && userAge >= 12) ||
    day === 'tuesday' ||
    day === 'thursday'
  ) {
    // output
    document.getElementById('answer').innerHTML =
      'You are eligible for the student pricing!'
  } else {
    // output
    document.getElementById('answer').innerHTML = 'You must pay regular price.'
  }
}
