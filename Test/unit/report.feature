Feature: Develop clover-style json report with configurable limits
  As a developer
  I can get clover-style json summary report for Atlassian Bamboo Test Mocha Parser with configurable limits including skipped code using Istanbul ignore directives
  So that I can get more efficient and accurate code coverage reporting

  Scenario: Code coverage report

    Given I have non-bundled Javascript files
    When I run coverage report on the files
    Then a report is produced referencing the non-bundled files
    And an xml report is produced referencing the non-bundled files
