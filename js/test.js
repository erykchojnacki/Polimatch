var firstQuestion = "Czy państwo powinno istnieć?";
var answers = [];

$("#agree").click(nextQuestion);
$("#not-agree").click(nextQuestion);
$("#previous").click(previousQuestion);
$("#retake").click(takeTestAgain);

updateQuestion(firstQuestion);

function nextQuestion() {
  if(this.id === "agree"){
    answers.push(1);
  }
  else{
    answers.push(0);
  }
  testTree();
}

function previousQuestion(){
  answers.pop();
  testTree();
}

function updateQuestion(text){
  $("#question-text").html(text);
}

function testTree(){
  if(answers.length > 0){
    if(answers[0] === 0){
      updateQuestion("Czy uważasz kapitalizm za sprawiedliwy system gospodarczy?");
      if(answers.length > 1){
        if(answers[1] === 0){
          updateQuestion("Czy kolektywizm to dobra forma organizacji życia gospodarczego?");
          if(answers.length > 2){
            if(answers[2] === 0){
              updateQuestion("Czy społeczeństwo powinno opierać się na wzajemnej współpracy?");
              if(answers.length > 3){
                if(answers[3] === 0){
                  showResults("Anarchizm klasyczny");
                }
                else if(answers[3] === 1){
                  showResults("Mutualizm");
                }
              }
            }
            else if(answers[2] === 1){
              updateQuestion("Czy powinniśmy zerwać z tradycjami i obyczajami?");
              if(answers.length > 3){
                if(answers[3] === 0){
                  showResults("Anarchokolektywizm");
                }
                else if(answers[3] === 1){
                  showResults("Anarchokomunizm");
                }
              }
            }
          }
        }
        else if(answers[1] === 1){
          updateQuestion("Czy członkowie społeczeństwa powinni ze sobą współpracować?");
          if(answers.length > 2){
            if(answers[2] === 0){
              showResults("Egoizm");
            }
            else if(answers[2] === 1){
              updateQuestion("Czy uważasz za wysoce istotne zachowanie konserwatywnej kultury przy pomocy dobrowolnych środków?");
              if(answers.length > 3){
                if(answers[3] === 0){
                  updateQuestion("Czy anarchokapitalizm powinien być zaprowadzony rewolucyjnie?");
                  if(answers.length > 4){
                    if(answers[4] === 0){
                      showResults("Libertarianizm głównego nurtu");
                    }
                    else if(answers[4] === 1){
                      showResults("Agoryzm");
                    }
                  }
                }
                else if(answers[3] === 1){
                  updateQuestion("Czy uważasz za niezwykle ważną obronę ładu naturalnego?");
                  if(answers.length > 4){
                    if(answers[4] === 0){
                      showResults("Libertarianizm Hoppego");
                    }
                    else if(answers[4] === 1){
                      showResults("Paleolibertarianizm");
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    else if(answers[0] === 1){
      updateQuestion("Czy popierasz demokrację?");
      if(answers.length > 1){
        if(answers[1] === 0){
          updateQuestion("Czy powinniśmy przywrócić monarchię?");
          if(answers.length > 2){
            if(answers[2] === 0){
              updateQuestion("Czy gospodarka centralnie planowana jest dobrym rozwiązaniem?");
              if(answers.length > 3){
                if(answers[3] === 0){
                  updateQuestion("Czy powinniśmy zorganizować gospodarkę w sposób korporacjonistyczny?");
                  if(answers.length > 4){
                    if(answers[4] === 0){
                      updateQuestion("Czy wolny rynek byłby wymarzonym systemem gospodarczym?");
                      if(answers.length > 5){
                        if(answers[5] === 0){
                          updateQuestion("Czy obywatele powinni mieć jakiekolwiek prawa?");
                          if(answers.length > 6){
                            if(answers[6] === 0){
                              showResults("Totalitaryzm");
                            }
                            else if (answers[6] === 1){
                              showResults("Autorytaryzm");
                            }
                          }
                        }
                        else if (answers[5] === 1) {
                          updateQuestion("Czy obywatele powinni mieć jakiekolwiek prawa?");
                          if(answers.length > 6){
                            if(answers[6] === 0){
                              showResults("Dyktatura wolnorynkowa");
                            }
                            else if (answers[6] === 1){
                              showResults("Autorytaryzm wolnorynkowy");
                            }
                          }
                        }
                      }
                    }
                    else if (answers[4] === 1) {
                      updateQuestion("Czy państwo powinno dyskryminować obywateli ze względu na rasę, religię lub orientację seksualną?");
                      if(answers.length > 5){
                        if(answers[5] === 0){
                          showResults("Faszyzm");
                        }
                        else if(answers[5] === 1){
                          showResults("Nazizm");
                        }
                      }
                    }
                  }
                  else if(answers[3] === 1){
                    showResults("Komunizm dyktatorski");
                  }
                }
              }
            }
            else if(answers[2] === 1){
              updateQuestion("Czy monarchę powinna obowiązywać konstytucja?");
              if(answers.length > 3){
                if(answers[3] === 0){
                  showResults("Monarchia absolutna");
                }
                else if(answers[3] === 1){
                  showResults("Monarchia konstytucyjna")
                }
              }
            }
          }
        }
        else if(answers[1] === 1){
          updateQuestion("Czy państwo powinno zapewniać wyłącznie bezpieczeństwo i sądownictwo?");
          if(answers.length > 2){
              if(answers[2] === 0){
                updateQuestion("Czy państwo powinno budować i utrzymywać infrastrukturę drogową, sieć energetyczną i wodociągi?");
                if(answers.length > 3){
                  if(answers[3] === 0){
                    showResults("Minarchizm");
                  }
                  if(answers[3] === 1){
                    updateQuestion("Czy państwo powinno pomagać skrajnie biednym?");
                    if(answers.length > 4){
                      if(answers[4] === 0){
                        showResults("Neoliberalizm");
                      }
                      else if (answers[4] === 1){
                        updateQuestion("Czy państwo powinno zapewnić bezpłatną edukację?");
                        if (answers.length > 5){
                          if(answers[5] === 0){
                            showResults("Klasyczny liberalizm");
                          }
                          else if (answers[5] === 1){
                            updateQuestion("Czy państwo powinno zapewnić ubezpieczenie emerytalne i zdrowotne dla osób starszych?");
                            if (answers.length > 6){
                              if(answers[6] === 0){
                                showResults("Klasyczny liberalizm");
                              }
                              else if(answers[6] === 1){
                                updateQuestion("Czy państwo powinno finansować powszechną i bezpłatną opiekę zdrowotną?");
                                if(answers.length > 7){
                                  if(answers[7] === 0){
                                    showResults("Konserwatyzm klasyczny");
                                  }
                                  else if(answers[7] === 1){
                                    updateQuestion("Czy państwo powinno być oparte na katolickiej nauce społecznej?");
                                    if(answers.length > 8){
                                      if(answers[8] === 0){
                                        updateQuestion("Czy równość wobec prawa jest dla ciebie bardzo ważna?");
                                        if(answers.length > 9){
                                          if(answers[9] === 0){
                                            showResults("Konserwatyzm ewolucyjny");
                                          }
                                          else if(answers[9] === 1){
                                            updateQuestion("Czy środki produkcji powinny być uspołecznione?");
                                            if(answers.length > 10){
                                              if(answers[10] === 0){
                                                updateQuestion("Czy powinniśmy jak najszybciej uczynić nasze społeczeństwo egalitarnym?");
                                                if(answers.length > 11){
                                                  if(answers[11] === 0){
                                                    updateQuestion("Czy wolność gospodarcza idzie w parze z państwem opiekuńczym?");
                                                    if(answers.length > 12){
                                                      if(answers[12] === 0){
                                                        showResults("Socjaldemokracja");
                                                      }
                                                      else if(answers[12] === 1){
                                                        showResults("Socjalliberalizm");
                                                      }
                                                    }
                                                  }
                                                  else if(answers[11] === 1){
                                                    showResults("Progresywizm");
                                                  }
                                                }
                                              }
                                              else if(answers[10] === 1){
                                                updateQuestion("Czy powinniśmy zerwać z obecną kulturą i tradycjami?");
                                                if(answers.length > 11){
                                                  if(answers[11] === 0){
                                                    showResults("Socjalizm");
                                                  }
                                                  else if(answers[11] === 1){
                                                    showResults("Marksizm");
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                      else if(answers[8] === 1){
                                        showResults("Chrześcijańska demokracja");
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              else if (answers[2] === 1) {
                  updateQuestion("Czy państwo powinno ingerować prawnie w światopogląd?")
                  if(answers.length > 3){
                    if(answers[3] === 0){
                      showResults("Minarchizm");
                    }
                    else if (answers[3] === 1) {
                      updateQuestion("Czy państwo powinno być progresywne światopoglądowo?");
                      if(answers.length > 4){
                        if(answers[4] === 0){
                          showResults("Konserwatyzm wolnorynkowy");
                        }
                        else if (answers[4] === 1) {
                          showResults("Progresywizm wolnorynkowy");
                        }
                      }
                    }
                  }
                }
            }
        }
      }
    }
  }
  else {
    updateQuestion(firstQuestion);
  }
}

function showResults(result){
  $("#question-content").attr("style", "display: none");
  $("#result").attr("style", "display: block");
  $("#result-insert").text(result);
}

function takeTestAgain() {
  answers = [];
  updateQuestion(firstQuestion);
  $("#question-content").attr("style", "display: block");
  $("#result").attr("style", "display: none");
}
