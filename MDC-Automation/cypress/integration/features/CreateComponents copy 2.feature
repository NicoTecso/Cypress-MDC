Feature: MDC Create Components

  @focus  

  Scenario Outline: Create Agents
    Given I take token whit my "<username>" and my "<password>"
    When I open MDC page on Chrome Browser
    #And I go to the Node "Sistema" of the menu
    And I go to the subNode "Comunicación - Motor MDC" of the menu
    And I go to the subNodeChild "Agentes" of the menu
    And I press on New button
    And I type "vehiculo1-6-5" in the field "Nombre"
    And I type "algo" in the field "Descripción"
    And I select "32 bits" in the field "64 bits"
    And I press on the Save&Continue
    And I go to "Puertos" tab
    And I press on add
    And I select "TCP/IP" in the field "Tipo de Puerto"
    And I select "vehiculo1" in the field "Ninguno"
    And I press on Save Device
    Then I see the menssage that indicate the correctly save
    And I go to "Windows" tab
    And I press on Generar script instalación
    And I press on Aceptar button of modal
    And I press on the Save&Continue
    And I press on Copiar

    Examples:
      | username | password |
      | admin    | admin    |

