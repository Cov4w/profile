window.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('skillsRadar');
  if (!ctx) return;
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Python', 'Java', 'Spring Framework', 'MySQL', 'HTML/CSS'],
      datasets: [{
        label: '나의 기술',
        data: [5, 3, 3, 4, 3.5], // 원하는 값으로 수정
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(54, 162, 235, 1)'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: { display: true, text: '기술 스택 레이더 차트' }
      },
      scales: {
        r: {
          min: 0,
          max: 5,
          ticks: { stepSize: 1, color: '#888' },
          pointLabels: { font: { size: 16 }, color: '#222' },
          grid: { color: '#bbb' },
          angleLines: { color: '#bbb' }
        }
      }
    }
  });
});