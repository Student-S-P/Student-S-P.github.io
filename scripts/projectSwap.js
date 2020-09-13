/**********************************************************************/
/*! \file  projectSwap.js
 * \author Seth Peterson
 * \date   2020-09-13
 * \brief
 *     This file contains jQuery code that swaps the contents in the main
 *     body of the Projects page.
 */
/**********************************************************************/

"use strict";

$('input:radio[name="projectSelector"]').change(
  function() {
    let nextProject = 'Refactory'
    if ($(this).checked)
    {
      nextProject = this.value;
    }
    //Remove the current child of main.
    $('body > main').addClass('Hidden').detach();
    //Find the next main to use, make it visible, and place it.
    $('main#'+nextProject).removeClass('Hidden').insertAfter('header');
  });

