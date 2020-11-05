import React from 'react';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';

const articles = [{ title: "Tab1" , content: "1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id nisl lacinia, semper mi eu, efficitur dolor. Etiam facilisis tellus eget metus imperdiet eleifend. Ut ut est eu ligula maximus interdum ac a nisi. Nam aliquet non augue pulvinar luctus. Phasellus convallis, metus sed ultricies euismod, ligula nisl semper arcu, non vulputate eros mi porta elit. Morbi placerat ornare dolor, dignissim placerat libero ullamcorper condimentum. Integer condimentum lobortis commodo. Phasellus in accumsan elit. Praesent malesuada, eros et imperdiet auctor, leo nunc dictum ipsum, id cursus purus elit ac sem. Morbi tristique vel enim eu convallis. Proin pulvinar ante sed scelerisque imperdiet. Cras tincidunt ligula sed nibh lacinia iaculis." } ,
{ title: "Tab2" , content: "2. Mauris faucibus vestibulum erat, quis blandit elit volutpat sit amet. Vivamus facilisis finibus volutpat. Phasellus vitae dictum odio, vel consectetur elit. Ut fermentum enim in blandit eleifend. Pellentesque ultricies, nibh nec vestibulum auctor, neque lectus vehicula augue, ac mollis erat elit a nulla. Praesent ac urna imperdiet, tincidunt metus eget, consectetur metus. Ut sed mauris laoreet, mollis lacus sed, gravida justo. Nam eu dolor ornare, ultricies diam ut, blandit justo. Suspendisse et rhoncus turpis. Proin a molestie nisl, in congue urna. Praesent non ullamcorper nunc. Cras massa eros, dignissim vitae nulla et, volutpat vehicula mauris. Integer eleifend eget ipsum ut lobortis. Proin in porttitor nulla. Cras auctor est tortor, eu aliquet nulla pharetra eu. Sed lacinia massa massa, quis ultrices arcu sollicitudin et." },
{ title: "Tab3" , content: "3. Cras eu efficitur dolor. Vestibulum accumsan malesuada urna, eu tincidunt ex. Donec sed velit feugiat, tempus nisi et, rutrum nibh. Praesent finibus quam risus, et pharetra est finibus vitae. Mauris sit amet eros pretium, scelerisque sapien id, mollis erat. Curabitur suscipit imperdiet tincidunt. Nullam in elit purus. Fusce efficitur facilisis dignissim. Quisque ac suscipit leo, sed porttitor ex."}  ]
const Root = (props) => {
    return (
        <div>
            < Clock/>
            < Tabs  tabs={articles}/>
            < Weather />
        </div>
    )
}

export default Root;
