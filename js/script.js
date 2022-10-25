// Copyright (c) 2022 liya getachew All rights reserved
//
// Created by: liya getachew
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit3-01-JS/", {
    scope: "/ICS2O-Unit3-01-JS/",
  })
}

/**
 * This function solves the area of a trapezoid.
 */
function solveArea() {
  //input
  const baseA = parseInt(document.getElementByID("base-a").value)
  const baseB = parseInt(document.getElementByID("base-b").value)
  const height = parseInt(document.getElementByID("height").value)

  //process
  const area = ((baseA + baseB) / 2) * height

  //output
  document.getElementById("area").innerHTML = "Area = " + area + " mm²"
}
