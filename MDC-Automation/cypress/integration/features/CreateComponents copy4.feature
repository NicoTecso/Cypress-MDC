Feature: MDC Create Components

  @focus  
  
  Scenario Outline: Create Device groups
    Given I take token whit my "<username>" and my "<password>"
    And I open MDC page on Chrome Browser
    #When I complete my "<username>" and my "<password>"
    #And I go to the Node "Sistema" of the menu
    And I go to the subNode "Drivers" of the menu
    And I go to the subNodeChild "Grupos de dispositivos" of the menu
    And I press on New button
    And I type "vehiculo-" in the field "Nombre"
    And I select "Medidor" in the field "Tipo de dispositivo"
    And I press on the Save&Continue
    And I press on Add Device
    And In the modal I select "dispo-22-18-04-01" in the field "Dispositivo"
    And I press on Save Device
    

    Examples:
      | username | password |
      | admin    | admin    |


     