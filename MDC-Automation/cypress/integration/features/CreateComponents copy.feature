Feature: MDC Create Components

  @focus  

Scenario Outline: Create Categories
    Given I take token whit my "<username>" and my "<password>"
    When I open MDC page on Chrome Browser
    #When I complete my "<username>" and my "<password>"
    #And I go to the Node "Sistema" of the menu
    And I go to the subNode "Drivers" of the menu
    And I go to the subNode "Categorías" of the menu
    And I press on New button
    And I type "<nombre>" in the field "Nombre"
    And I select "Parameters" in the field "Base de datos Mongo"
    And I press on the Save button
    Then I see the menssage that indicate the correctly save
    Then I verify that in the "Categories" database there is a record with the value "<nombre>" for the "name" field

 
  Examples:
      | username | password | nombre |      
      | admin    | admin    | cypress2 |
      | admin    | admin    | cypress3 |
      | admin    | admin    | cypress4 |