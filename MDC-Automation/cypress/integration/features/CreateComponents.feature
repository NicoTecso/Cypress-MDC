Feature: MDC Create Components

  I want create the elements for run tasks
  
  @focus  
  
  Scenario Outline: Create Driver
    Given I take token whit my "<username>" and my "<password>"
    And I open MDC page on Chrome Browser
    #When I complete my "<username>" and my "<password>"
    #And I go to the Node "Sistema" of the menu
    And I go to the subNode "Drivers" of the menu
    And I go to the subNodeChild "Drivers" of the menu
    And I press on New button
    And I validate that not exist in the "Drivers" database the value "<code>" for the "code" field
    And I type "<code>" in the field "Código"
    And I type "vehiculo-" in the field "Nombre"
    And I type "1" in the field "Versión"
    And I type "componente-" in the field "Componente"
    And I press on the Save&Continue
    And I go to "Modelos" tab
    And I press on Asociar button
    And In the modal I select "modelo-22-18-04-01" in the field "Modelo"
    And I press on Save button modal Asociar
    And I press on the Save button
    Then I see the menssage that indicate the correctly save
    Then I verify that in the "Drivers" database there is a record with the value "<code>" for the "code" field
    And I filter by "<code>" for "Código"
    And I activate the driver


    Examples:
      | username | password | code |
      | admin    | admin    | otrb |




  Scenario Outline: Create Queue
    Given I take token whit my "<username>" and my "<password>"
    When I open MDC page on Chrome Browser
    #When I complete my "<username>" and my "<password>"
    #And i go to the Node "Sistema" of the menu
    And I go to the subNode "Comunicación - Motor MDC" of the menu
    And I go to the subNodeChild "Colas" of the menu
    And I press on New button
    And I type "vehiculo2" in the field "Nombre"
    And I type "descript" in the field "Descripción"
    And I select "TCP/IP" in the field "Tipo de Puerto"
    And I press on the Save button
    Then I see the menssage that indicate the correctly save
    Then I verify that in the "Queues" database there is a record with the value "vehiculo1" for the "name" field

  Examples:
      | username | password |
      | admin    | admin    |


 Scenario Outline: Create Categories
    Given I take token whit my "<username>" and my "<password>"
    When I open MDC page on Chrome Browser
    #When I complete my "<username>" and my "<password>"
    #And I go to the Node "Sistema" of the menu
    And I go to the subNode "Drivers" of the menu
    And I go to the subNode "Categorías" of the menu
    And I press on New button
    And I type "vehiculo3" in the field "Nombre"
    And I select "Parameters" in the field "Base de datos Mongo"
    And I press on the Save button
    Then I see the menssage that indicate the correctly save
    Then I verify that in the "Categories" database there is a record with the value "vehiculo3" for the "name" field

 
  Examples:
      | username | password |
      | admin    | admin    |
  
   Scenario Outline: Create Devices
    Given I take token whit my "<username>" and my "<password>"
    When I open MDC page on Chrome Browser
    And I go to the Node "Drivers" of the menu
    And I go to the subNode "Dispositivos" of the menu
    And I press on New button
    And I type "vehiculo17" in the field "Código"
    And I type "vehiculo" in the field "Nombre"
    And I select "Medidor" in the field "Tipo de dispositivo"
    And I select "modelo-22-18-04-01" in the field "Modelo"
    And I type "prueba" in the field "Observaciones"
    And I select "tecso" in the field "Dispositivo maestro"
    And I press on the Save&Continue
    #And I go to "Drivers" tab
    #And I press on add 
    #And In the modal I select "driver-2501-3" in the field "Driver"
    #And I press on Save button modal
    #And I activate the driver
    #And I go to "Errores específicos" tab
    #And In the modal I select "-5 - Sin Datos" in the field "Error general"
    #And In the modal I type "-5 - Sin Datos" in the field "Error general"
    #And I press on the Save button modal
    And I press on the Save button
    Then I verify that in the "Devices" database there is a record with the value "vehiculo17" for the "code" field

  Examples:
      | username | password |
      | admin    | admin    |


 
  Scenario Outline: Create Brands
    Given I take token whit my "<username>" and my "<password>"
    When I open MDC page on Chrome Browser
    And I go to the Node "Drivers" of the menu
    And I go to the subNode "Marcas" of the menu
    And I press on New button
    And I type "vehiculo2" in the field "Nombre"
    And I type "descript" in the field "Observación"
    And I press on the Save button
    Then I see the menssage that indicate the correctly save
    Then I verify that in the "Brands" database there is a record with the value "vehiculo2" for the "name" field

  Examples:
      | username | password |
      | admin    | admin    |


   Scenario Outline: Create Models
    Given I take token whit my "<username>" and my "<password>"
    When I open MDC page on Chrome Browser
    And I go to the Node "Drivers" of the menu
    And I go to the subNode "Modelos" of the menu
    And I press on New button
    And I select "vehiculo" in the field "Marca"
    And I type "vehiculo1" in the field "Nombre"
    And I type "descript" in the field "Observación"
    And I press on the Save button
    Then I see the menssage that indicate the correctly save
    Then I verify that in the "Models" database there is a record with the value "vehiculo1" for the "name" field

    Examples:
      | username | password |
      | admin    | admin    |

  Scenario Outline: Create Comandos
    Given I take token whit my "<username>" and my "<password>"
    When I open MDC page on Chrome Browser
    And I go to the Node "Drivers" of the menu
    And I go to the subNode "Comandos" of the menu
    And I press on New button
    And I type "autoQA29" in the field "Nombre"
    And I type "AUTO1;AUTO2" in the field "Comandos Conocidos"
    And I press on the Save&Continue
    And I go to "Parámetros" tab
    And I press on add
    And In the existing modal I type "AUTO1" in the field "Nombre"
    And In the existing modal I type "AUTO1;AUTO2" in the field "Parámetros Conocidos"
    And I press on Save button modal Commands
    And I press on the Save button
    Then I see the menssage that indicate the correctly save
    Then I verify that in the "Commands" database there is a record with the value "autoQA29" for the "name" field
    
    Examples:
      | username | password |
      | admin    | admin    |
 
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
    And I press on the Save button

    Examples:
      | username | password |
      | admin    | admin    |