function checkweight() {
  const w1 =document.getElementById("weightCabin").value;
  const w2 =document.getElementById("weightCheckin").value;
  if (w1 > 40 && w2 > 8) {
    Swal.fire({
      icon: 'error',
      title: 'Overweight',
      text: 'Check-in limit is 40kg and Cabin limit is 8kg.',
    });
  } else if (w1 > 8) {
    Swal.fire({
      icon: 'warning',
      title: 'Cabin Overweight',
      text: 'Cabin bag exceeds the 8kg limit.',
    });
  } else if (w2 > 40) {
    Swal.fire({
      icon: 'warning',
      title: 'Check-in Overweight',
      text: 'Check-in bag exceeds the 40kg limit.',
    });
  } else {
    Swal.fire({
      icon: 'success',
      title: 'Safe Limit!',
      text: 'Your luggage is within the allowed weight.',
    });
  }
}
