# intervalModifierCalculator

<b>What is this?</b><br>
A simple calculator used to determine the suggested interval modifier % in Anki. 

<b>What is interval modifier?</b><br>
Interval modifier allows you to apply a multiplication factor to the intervals Anki generates. At its default of 100% it does nothing; if you set it to 80% for example, intervals will be generated at 80% of their normal size (so a 10 day interval would become 8 days). You can thus use the multiplier to make Anki present cards more or less frequently than it would otherwise, trading study time for retention or vice versa. (anki manual, 2021)

<b>How is the calculation determined?</b><br>
log(desired retention%) / log(current retention%)

<b>What should my desired retention be?</b><br>
85% keeps it challenging enough to strengthen memory retention

<b>How do I get my current retention</b><br>
I recommend downloading the addon "True Retention" and then inputting the "true retention%" under the stats field from Anki.

<b>Why do I even need to change the interval modifier?</b><br>
Adjusting the interval modifier will allow you increase your "true retention" by increasing/decreasing the frequency you see cards.

Please let me know if there are any issues.
