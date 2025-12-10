# 

How to make the Show button display the country view?
- First, as the Show button is supposed to associate with the filtered countries, so it should be inside the Country Component.
- Also, when Show is clicked, the country view is expected to appear, meaning that the state of the App has changed. Therefore, it is needed to bind the Show button to a call back event that sets the state (named selectedCountry) for the App when the Show is clicked.
- At this stage, the question is what kind of state the Show button would set? This is the state of the country (selectedCountry), which contains the respective Show button clicked!
- Then, we would call out the component showing all CountryView info with the updated selectedCountry