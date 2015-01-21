/*!
 * randomSentence.js v1.1.1
 * Put a random sentence where you want in your website. Perfect for footer :)
 * MIT License
 * by Vincent Loy
 * http://vincent-loy.fr
 */
(function($)
{
    "use strict"; 
    
    $.fn.randomSentence=function(options)
    {
        
        var defauts=
        {
            "lang" : "en",
            "sentencesPath" : "dev/sentences.json"

        };  

        var parameters=$.extend(defauts, options);
        

        return this.each(function()
        {
           var sentence;
            var that = $(this);
            
            $.getJSON(parameters.sentencesPath, function($data){
                var results = [];
                var searchField = "lang";
                var searchVal = parameters.lang;
                
                for(var i = 0; i < $data.length ; i++) {
                    if($data[i][searchField] == searchVal){
                        results.push($data[i].sentences);
                    }
                }
                var randomize = parseInt(Math.random()*results[0].length);
                sentence = results[0][randomize];

                that.text(sentence);
            });

            
        });
    };
})(jQuery);