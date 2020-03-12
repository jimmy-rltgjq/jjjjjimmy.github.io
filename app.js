var App = function(){
    var apps = {
        initElements: {
            WORK_EXPERIENCE_HIEGHT: document.getElementsByClassName("work_experience")[0].offsetTop,
            OTHER_EXPERIENCE_HIEGHT: document.getElementsByClassName("other_experiences")[0].offsetTop,
            SKILS_HIEGHT: document.getElementsByClassName("skills")[0].offsetTop,

        },
        addEventToElements: function(){
            window.addEventListener('keypress', function(e){
                if (e.keyCode === 49) {
                    window.scrollTo(
                        {
                            top: apps.initElements.WORK_EXPERIENCE_HIEGHT,
                            behavior: 'smooth',
                        }
                    )
                } else if ( e.keyCode === 96) {
                    window.scrollTo(
                        {
                            top: 0,
                            behavior: 'smooth',
                        }
                    )
                } else if ( e.keyCode === 50) {
                    window.scrollTo(
                        {
                            top: apps.initElements.OTHER_EXPERIENCE_HIEGHT,
                            behavior: 'smooth',
                        }
                    )
                } else if ( e.keyCode === 51) {
                    window.scrollTo(
                        {
                            top: apps.initElements.SKILS_HIEGHT,
                            behavior: 'smooth',
                        }
                    )
                }
            })

            return this;
        },
        init: function(){
            console.log('Init')

            return apps,
                this.initElements,
                this.addEventToElements();
        }
    }

    return apps
}