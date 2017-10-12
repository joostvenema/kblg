/*global $ */

$( document ).ready(function() {
    
    var $table = $('<table></table>');
    var $thead = $('<thead><tr><th>Datum</th><th>Tijdstip</th><th>Evenement</th><th>Deelnemers</th></tr></thead>');
    var $tbody = $('<tbody></tbody>');

    $table.addClass('koebergTable');
    
    $.getJSON( "https://joostvenema.github.io/kblg/agenda.json", function( data ) {
        $.each(data.items, function(k, v) {
            var $row = $('<tr><td>' + v.start_date + 
                         '</td><td>' + v.start_time + 
                         '</td><td><a href="https://www.strava.com/clubs/234627/group_events/' + v.event_id +
                         '">' + v.event_title + 
                         '</a></td><td>' + v.deelnemers + '</td></tr>');
            $tbody.append($row);
        });
    
    $table.append($thead);
    $table.append($tbody);
    
    $('#koebergAgenda').append($table);

    }); 
});
