Feature: Develop clover-style json report with configurable limits
  As a developer
  I can get clover-style json summary report for Atlassian Bamboo Test Mocha Parser with configurable limits
  So that I can get more efficient and accurate code coverage reporting

  Scenario: Code coverage report with no source maps

    Given I have non-bundled Javascript files
    When I run coverage report on the files
    Then a report is produced referencing the non-bundled files
