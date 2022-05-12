Feature: MDC Test Services

  I want create the elements for run tasks

  Scenario Outline: Validation of Services
    Given I check services "<services>"

    Examples:
      | services |
      | Device   |
      | Category |
      | Driver   |
      | Queue    |
      | Brand    |
      | Model    |
      | Command  |
