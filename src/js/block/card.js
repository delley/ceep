var $cards = document.querySelectorAll('.card');
var $cardColors =  document.querySelectorAll('.card-options');

for (var index = 0; index < $cards.length; index++) {
  $cards[index].addEventListener('click', function(event) {
    var $this = event.target;

    var $card = this;

    if ($this.dataset.color) {
      $card.dataset.color = $this.dataset.color;

      for (var position = 0; position < $cardColors.length; position++) {
        $cardColors[position].classList.remove('isActive');
      }

      $this.classList.add('isActive');
    }

    if ($this.classList.contains('card_delete')) {
      $card.remove();
    }

  });
}
