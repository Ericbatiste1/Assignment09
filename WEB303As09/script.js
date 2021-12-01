let data = [];
$.ajax({
    url: "spongebobcharacters.json",
    success: function(fetchData) {
       let acount = 0;
       let ncount = 0;
        data = fetchData;
        updateTable(fetchData.spongebobcharacters);
        fetchData.spongebobcharacters.forEach(character => {
            let firstLetter = character.name[0].toLowerCase();
            if (firstLetter.match(/[a-mA-M]/)) {
                acount++
            } else {
                ncount++
            }
        });
        $("body").append(`
        <button id="buttonA">
        A - M (${acount})
        </button>
        <button id="buttonB">
        N - Z (${ncount})
        </button>
        `)
        $("#buttonA").click(function(e){
            $("tbody tr").each(function(el) {
                let value = $(this).children().first().text()
                if(!value[0].match(/[a-mA-M]/)) {
                    $(this).hide();
                }
            })
        })
        $("#buttonB").click(function(e){
            $("tbody tr").each(function(el) {
                let value = $(this).children().first().text()
                if(value[0].match(/[a-mA-M]/)) {
                    $(this).hide();
                }
            })
        })
        let originalData = fetchData.spongebobcharacters;
        function compareStrings(obj1, obj2, fieldName, ascending) {
            const str1 = obj1[fieldName];
            const str2 = obj2[fieldName];
          
            let sum1 = 0;
            let sum2 = 0;
            for ( let i = 0; i < str1.length; i++ ) {
              sum1 += str1.charCodeAt(i);
            }
          
            for ( let i = 0; i < str2.length; i++ ) {
              sum2 += str2.charCodeAt(i);
            }
            console.log(sum1, sum2);
            if(ascending) {
                return sum1 - sum2
            } else {
                return sum2 - sum1
            }
          
          }

          function compareAges(obj1, obj2, age, ascending) {
            const str1 = obj1[age];
            const str2 = obj2[age];
          
            let age1 = 0;
            let age2 = 0;
            for ( let i = 0; i < str1.length; i++ ) {
              age1 += str1.charCodeAt(i);
            }
          
            for ( let i = 0; i < str2.length; i++ ) {
              age2 += str2.charCodeAt(i);
            }
            console.log(age1, age2);
            if(ascending) {
                return age1 - age2
            } else {
                return age2 - age1
            }
          
          }
            let clickNum = 0;
            $("#0").click(function(e){
                console.log('here');
                e.preventDefault();
                if(clickNum === 0) {
                    updateTable(originalData.sort(function(a, b){
                        return compareStrings(a, b, 'name', true)
                    }))
                    clickNum++
                } else if(clickNum === 1){
                    $("#0").html('Name' + '&#x25BC;')
                    updateTable(originalData.sort(function(a, b){
                        return compareStrings(a, b, 'name', false)
                    }))
                    clickNum++
                } else if(clickNum === 2) {
                    updateTable(originalData)
                    clickNum = 0;
                }
            })
            $("#1").click(function(e){
                console.log('here');
                e.preventDefault();
                if(clickNum === 0) {
                    updateTable(originalData.sort(function(a, b){
                        return compareAges(a, b, age, true)
                    }))
                    clickNum++
                } else if(clickNum === 1){
                    $("#1").html('Age' + '&#x25BC;')
                    updateTable(originalData.sort(function(a, b){
                        return compareAges(a, b, age, false)
                    }))
                    clickNum++
                } else if(clickNum === 2) {
                    updateTable(originalData)
                    clickNum = 0;
                }
            })
            $("#2").click(function(e){
                console.log('here');
                e.preventDefault();
                if(clickNum === 0) {
                    updateTable(originalData.sort(function(a, b){
                        return compareStrings(a, b, 'residence', true)
                    }))
                    clickNum++
                } else if(clickNum === 1){
                    $("#2").html('Residence' + '&#x25BC;')
                    updateTable(originalData.sort(function(a, b){
                        return compareStrings(a, b, 'residence', false)
                    }))
                    clickNum++
                } else if(clickNum === 2) {
                    updateTable(originalData)
                    clickNum = 0;
                }
            })
            $("#3").click(function(e){
                console.log('here');
                e.preventDefault();
                if(clickNum === 0) {
                    updateTable(originalData.sort(function(a, b){
                        return compareStrings(a, b, 'occupation', true)
                    }))
                    clickNum++
                } else if(clickNum === 1){
                    $("#3").html('Occupation' + '&#x25BC;')
                    updateTable(originalData.sort(function(a, b){
                        return compareStrings(a, b, 'occupation', false)
                    }))
                    clickNum++
                } else if(clickNum === 2) {
                    updateTable(originalData)
                    clickNum = 0;
                }
            })
            $("#4").click(function(e){
                console.log('here');
                e.preventDefault();
                if(clickNum === 0) {
                    updateTable(originalData.sort(function(a, b){
                        return compareStrings(a, b, 'date', true)
                    }))
                    clickNum++
                } else if(clickNum === 1){
                    $("#4").html('Date' + '&#x25BC;')
                    updateTable(originalData.sort(function(a, b){
                        return compareStrings(a, b, 'date', false)
                    }))
                    clickNum++
                } else if(clickNum === 2) {
                    updateTable(originalData)
                    clickNum = 0;
                }
            })
        console.log(data);
    }
})

$("input").keyup(function(e){
    $("tbody tr").each(function (el) {
        let value = $(this).children().first().text();
           console.log(value)
           if(e.target.value === "") {
               $(this).removeClass("highlight");
           }
           else if(value.includes(e.target.value.toLowerCase())) {
            $(this).addClass("highlight");
        } else {
            $(this).removeClass("highlight");
        }
    })
       
})

function updateTable(data){
    console.log(data);
    $("table#characters tbody").empty();
    data.forEach(character =>{
        $("table#characters tbody").append(`
            <tr>
                <td>${character.name}</td>
                <td>${character.age}</td>
                <td>${character.residence}</td>
                <td>${character.occupation}</td>
                <td>${character.date}</td>
            </tr>
            `)
    })

}