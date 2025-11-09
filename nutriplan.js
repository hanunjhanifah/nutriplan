
        // Data resep makanan Indonesia
        const recipeDatabase = [
            {
                id: 1,
                name: "Nasi Goreng Sehat",
                description: "Nasi goreng dengan tambahan sayuran dan protein tanpa MSG, cocok untuk sarapan atau makan siang.",
                calories: 380,
                carbs: 55,
                protein: 18,
                fat: 12,
                fiber: 8,
                cookTime: 25,
                servings: 2,
                category: "sarapan",
                difficulty: "mudah",
                ingredients: [
                    { name: "Nasi merah", amount: "200", unit: "g" },
                    { name: "Dada ayam fillet", amount: "100", unit: "g" },
                    { name: "Telur", amount: "1", unit: "butir" },
                    { name: "Wortel", amount: "50", unit: "g" },
                    { name: "Buncis", amount: "50", unit: "g" },
                    { name: "Bawang putih", amount: "2", unit: "siung" },
                    { name: "Bawang merah", amount: "3", unit: "butir" },
                    { name: "Kecap manis rendah gula", amount: "1", unit: "sdm" },
                    { name: "Minyak zaitun", amount: "1", unit: "sdm" }
                ],
                instructions: [
                    "Potong dadu dada ayam fillet, iris tipis wortel dan buncis.",
                    "Haluskan bawang putih dan bawang merah.",
                    "Panaskan minyak zaitun, tumis bumbu halus hingga harum.",
                    "Masukkan ayam, masak hingga berubah warna.",
                    "Tambahkan wortel dan buncis, masak hingga setengah matang.",
                    "Masukkan nasi merah, aduk rata.",
                    "Buat lubang di tengah wajan, masukkan telur dan orak-arik.",
                    "Campur telur dengan nasi, tambahkan kecap manis.",
                    "Aduk rata dan masak hingga matang sempurna.",
                    "Sajikan hangat dengan irisan timun dan tomat."
                ],
                tips: "Gunakan nasi yang sudah dingin agar tidak lengket saat digoreng."
            },
            {
                id: 2,
                name: "Gado-Gado Lengkap",
                description: "Salad khas Indonesia dengan sayuran segar, telur, dan bumbu kacang yang gurih dan sehat.",
                calories: 320,
                carbs: 35,
                protein: 15,
                fat: 14,
                fiber: 12,
                cookTime: 30,
                servings: 4,
                category: "makan siang",
                difficulty: "sedang",
                ingredients: [
                    { name: "Kangkung", amount: "100", unit: "g" },
                    { name: "Tauge", amount: "100", unit: "g" },
                    { name: "Wortel", amount: "1", unit: "buah" },
                    { name: "Buncis", amount: "100", unit: "g" },
                    { name: "Kol", amount: "100", unit: "g" },
                    { name: "Telur rebus", amount: "2", unit: "butir" },
                    { name: "Tahu", amount: "2", unit: "potong" },
                    { name: "Tempe", amount: "2", unit: "potong" },
                    { name: "Kacang tanah sangrai", amount: "100", unit: "g" },
                    { name: "Bawang putih", amount: "2", unit: "siung" },
                    { name: "Cabai merah", amount: "2", unit: "buah" }
                ],
                instructions: [
                    "Rebus semua sayuran secara terpisah hingga matang tapi masih renyah.",
                    "Goreng tahu dan tempe setengah matang.",
                    "Untuk bumbu kacang: haluskan kacang tanah, bawang putih, dan cabai.",
                    "Tumis bumbu halus hingga harum.",
                    "Tambahkan gula merah, garam, dan air asam jawa.",
                    "Tuang air sedikit demi sedikit sambil diaduk hingga saus mengental.",
                    "Susun sayuran rebus, tahu, tempe, dan telur di piring.",
                    "Siram dengan saus kacang dan sajikan."
                ],
                tips: "Jangan merebus sayuran terlalu lama agar nutrisinya tetap terjaga."
            },
            {
                id: 3,
                name: "Ikan Bakar Bumbu Kuning",
                description: "Ikan segar dibumbui rempah kuning dan dibakar, kaya protein dan omega-3.",
                calories: 280,
                carbs: 8,
                protein: 35,
                fat: 12,
                fiber: 3,
                cookTime: 40,
                servings: 2,
                category: "makan malam",
                difficulty: "mudah",
                ingredients: [
                    { name: "Ikan kembung", amount: "2", unit: "ekor" },
                    { name: "Kunyit", amount: "2", unit: "cm" },
                    { name: "Jahe", amount: "1", unit: "cm" },
                    { name: "Bawang putih", amount: "3", unit: "siung" },
                    { name: "Bawang merah", amount: "5", unit: "butir" },
                    { name: "Kemiri", amount: "2", unit: "butir" },
                    { name: "Serai", amount: "1", unit: "batang" },
                    { name: "Daun jeruk", amount: "2", unit: "lembar" }
                ],
                instructions: [
                    "Bersihkan ikan, beri garam dan air jeruk nipis, diamkan 15 menit.",
                    "Haluskan kunyit, jahe, bawang putih, bawang merah, dan kemiri.",
                    "Tumis bumbu halus dengan serai dan daun jeruk hingga harum.",
                    "Lumuri ikan dengan bumbu yang sudah ditumis.",
                    "Panaskan panggangan, olesi dengan minyak zaitun.",
                    "Bakar ikan hingga matang kedua sisinya.",
                    "Sajikan dengan nasi merah dan sambal terasi."
                ],
                tips: "Bakar ikan dengan api sedang agar matang sempurna tanpa gosong."
            }
        ];

        // Data rencana makan berdasarkan kalori
        const mealPlans = {
            1200: {
                sarapan: { name: "Oatmeal Pisang", calories: 280, carbs: 45, protein: 10, fat: 6, fiber: 8 },
                snackPagi: { name: "Apel", calories: 95, carbs: 25, protein: 0.5, fat: 0.3, fiber: 4 },
                makanSiang: { name: "Nasi Merah + Ikan Bakar + Sayur Asem", calories: 380, carbs: 50, protein: 25, fat: 8, fiber: 10 },
                snackSore: { name: "Yogurt Plain", calories: 120, carbs: 8, protein: 8, fat: 4, fiber: 0 },
                makanMalam: { name: "Capcay Seafood", calories: 325, carbs: 30, protein: 25, fat: 12, fiber: 8 }
            },
            1500: {
                sarapan: { name: "Nasi Goreng Sehat", calories: 380, carbs: 55, protein: 18, fat: 12, fiber: 8 },
                snackPagi: { name: "Pisang", calories: 105, carbs: 27, protein: 1.3, fat: 0.4, fiber: 3 },
                makanSiang: { name: "Gado-Gado Lengkap", calories: 320, carbs: 35, protein: 15, fat: 14, fiber: 12 },
                snackSore: { name: "Kacang Almond", calories: 160, carbs: 6, protein: 6, fat: 14, fiber: 3 },
                makanMalam: { name: "Ikan Bakar Bumbu Kuning + Nasi Merah", calories: 435, carbs: 45, protein: 35, fat: 12, fiber: 5 }
            },
            2000: {
                sarapan: { name: "Bubur Ayam Sehat", calories: 400, carbs: 60, protein: 20, fat: 10, fiber: 6 },
                snackPagi: { name: "Pepaya", calories: 120, carbs: 30, protein: 2, fat: 0.5, fiber: 5 },
                makanSiang: { name: "Rendang Daging + Nasi Merah + Lalapan", calories: 550, carbs: 55, protein: 35, fat: 20, fiber: 8 },
                snackSore: { name: "Salad Buah", calories: 150, carbs: 30, protein: 2, fat: 3, fiber: 4 },
                makanMalam: { name: "Ikan Bakar + Tumis Kangkung + Nasi Merah", calories: 480, carbs: 50, protein: 35, fat: 15, fiber: 7 }
            }
        };

        // Fungsi kalkulator nutrisi
        function calculateNutrition() {
            // Ambil nilai dari form
            const gender = document.getElementById('gender').value;
            const age = parseInt(document.getElementById('age').value);
            const weight = parseFloat(document.getElementById('weight').value);
            const height = parseInt(document.getElementById('height').value);
            const activity = parseFloat(document.getElementById('activity').value);
            const goal = document.getElementById('goal').value;
            
            // Validasi input
            if (!gender || !age || !weight || !height || !activity || !goal) {
                alert('Harap lengkapi semua data!');
                return;
            }
            
            // Hitung BMR menggunakan rumus Mifflin-St Jeor
            let bmr;
            if (gender === 'male') {
                bmr = 10 * weight + 6.25 * height - 5 * age + 5;
            } else {
                bmr = 10 * weight + 6.25 * height - 5 * age - 161;
            }
            
            // Hitung TDEE (Total Daily Energy Expenditure)
            let tdee = bmr * activity;
            
            // Sesuaikan dengan tujuan diet
            if (goal === 'loss') {
                tdee -= 500; // Defisit 500 kalori untuk penurunan berat badan
            } else if (goal === 'gain') {
                tdee += 500; // Surplus 500 kalori untuk penambahan berat badan
            }
            
            // Hitung kebutuhan makronutrien
            // Protein: 1.6-2.2g per kg berat badan
            const proteinGrams = Math.round(weight * 1.8);
            const proteinCalories = proteinGrams * 4;
            
            // Lemak: 20-35% dari TDEE
            const fatCalories = tdee * 0.25;
            const fatGrams = Math.round(fatCalories / 9);
            
            // Karbohidrat: sisanya
            const carbsCalories = tdee - proteinCalories - fatCalories;
            const carbsGrams = Math.round(carbsCalories / 4);
            
            // Serat: 14g per 1000 kalori
            const fiberGrams = Math.round((tdee / 1000) * 14);
            
            // Hitung kebutuhan mineral berdasarkan usia dan gender
            let calcium, iron, magnesium, potassium, zinc, sodium;
            
            if (gender === 'male') {
                calcium = age < 50 ? 1000 : 1200;
                iron = age < 19 ? 11 : 8;
                magnesium = age < 31 ? 400 : 420;
                potassium = 3400;
                zinc = age < 19 ? 11 : 11;
                sodium = 2300;
            } else {
                calcium = age < 50 ? 1000 : 1200;
                iron = age < 51 ? 18 : 8;
                magnesium = age < 31 ? 310 : 320;
                potassium = 2600;
                zinc = age < 19 ? 9 : 8;
                sodium = 2300;
            }
            
            // Tampilkan hasil
            document.getElementById('bmrResult').textContent = Math.round(bmr);
            document.getElementById('tdeeResult').textContent = Math.round(tdee);
            
            document.getElementById('carbsResult').textContent = carbsGrams + ' g';
            document.getElementById('proteinResult').textContent = proteinGrams + ' g';
            document.getElementById('fatResult').textContent = fatGrams + ' g';
            document.getElementById('fiberResult').textContent = fiberGrams + ' g';
            
            document.getElementById('calciumResult').textContent = calcium + ' mg';
            document.getElementById('ironResult').textContent = iron + ' mg';
            document.getElementById('magnesiumResult').textContent = magnesium + ' mg';
            document.getElementById('potassiumResult').textContent = potassium + ' mg';
            document.getElementById('zincResult').textContent = zinc + ' mg';
            document.getElementById('sodiumResult').textContent = sodium + ' mg';
            
            // Update progress bars
            document.getElementById('carbsProgress').style.width = '50%';
            document.getElementById('proteinProgress').style.width = '30%';
            document.getElementById('fatProgress').style.width = '20%';
            document.getElementById('fiberProgress').style.width = '70%';
            
            // Tampilkan hasil
            document.getElementById('results').classList.add('active');
            document.getElementById('initialMessage').style.display = 'none';
            
            // Update rencana makan berdasarkan TDEE
            updateMealPlanBasedOnTDEE(Math.round(tdee));
        }

        // Fungsi untuk update rencana makan berdasarkan TDEE
        function updateMealPlanBasedOnTDEE(tdee) {
            const options = [1200, 1500, 2000];
            const closest = options.reduce((prev, curr) => {
                return (Math.abs(curr - tdee) < Math.abs(prev - tdee) ? curr : prev);
            });
            
            document.getElementById('calorieTargetSelect').value = closest;
            displayMealPlan(closest);
        }

        // Fungsi untuk menampilkan rencana makan
        function displayMealPlan(calorieTarget) {
            const mealPlanContainer = document.getElementById('customMealPlan');
            const plan = mealPlans[calorieTarget];
            
            if (!plan) {
                mealPlanContainer.innerHTML = '<p>Rencana makan untuk target kalori ini belum tersedia.</p>';
                return;
            }
            
            const mealTimes = [
                { key: 'sarapan', title: 'Sarapan', icon: 'fas fa-sun', time: '07:00' },
                { key: 'snackPagi', title: 'Snack Pagi', icon: 'fas fa-apple-alt', time: '10:00' },
                { key: 'makanSiang', title: 'Makan Siang', icon: 'fas fa-utensils', time: '13:00' },
                { key: 'snackSore', title: 'Snack Sore', icon: 'fas fa-carrot', time: '16:00' },
                { key: 'makanMalam', title: 'Makan Malam', icon: 'fas fa-moon', time: '19:00' }
            ];
            
            let html = '';
            mealTimes.forEach(mealTime => {
                const meal = plan[mealTime.key];
                html += `
                    <div class="meal-time-card">
                        <div class="meal-time-header">
                            <div class="meal-time-title">
                                <i class="${mealTime.icon}"></i>
                                ${mealTime.title} (${mealTime.time})
                            </div>
                            <div class="meal-time-calories">${meal.calories} kal</div>
                        </div>
                        <ul class="meal-items">
                            <li>${meal.name}</li>
                            <li class="nutrient-info">
                                Karbohidrat: ${meal.carbs}g | Protein: ${meal.protein}g | Lemak: ${meal.fat}g | Serat: ${meal.fiber}g
                            </li>
                        </ul>
                    </div>
                `;
            });
            
            // Total harian
            const totalCalories = Object.values(plan).reduce((sum, meal) => sum + meal.calories, 0);
            const totalCarbs = Object.values(plan).reduce((sum, meal) => sum + meal.carbs, 0);
            const totalProtein = Object.values(plan).reduce((sum, meal) => sum + meal.protein, 0);
            const totalFat = Object.values(plan).reduce((sum, meal) => sum + meal.fat, 0);
            const totalFiber = Object.values(plan).reduce((sum, meal) => sum + meal.fiber, 0);
            
            html += `
                <div class="meal-time-card" style="border-left-color: var(--accent); grid-column: 1 / -1;">
                    <div class="meal-time-header">
                        <div class="meal-time-title">
                            <i class="fas fa-chart-bar"></i>
                            Total Harian
                        </div>
                        <div class="meal-time-calories">${totalCalories} kal</div>
                    </div>
                    <ul class="meal-items">
                        <li>Total Karbohidrat: <strong>${totalCarbs}g</strong></li>
                        <li>Total Protein: <strong>${totalProtein}g</strong></li>
                        <li>Total Lemak: <strong>${totalFat}g</strong></li>
                        <li>Total Serat: <strong>${totalFiber}g</strong></li>
                    </ul>
                </div>
            `;
            
            mealPlanContainer.innerHTML = html;
        }

        // Fungsi untuk menampilkan resep
        function displayRecipes() {
            const recipeGrid = document.getElementById('recipeGrid');
            
            let html = '';
            recipeDatabase.forEach(recipe => {
                html += `
                    <div class="recipe-card">
                        <div class="recipe-img">
                            <i class="fas fa-utensils"></i>
                        </div>
                        <div class="recipe-content">
                            <div class="recipe-title">${recipe.name}</div>
                            <div class="recipe-meta">
                                <span><i class="fas fa-clock"></i> ${recipe.cookTime} menit</span>
                                <span class="recipe-calories">${recipe.calories} kalori</span>
                            </div>
                            <p class="recipe-description">${recipe.description}</p>
                            <div class="recipe-tags">
                                <span class="tag">${recipe.category}</span>
                                <span class="tag">${recipe.difficulty}</span>
                                <span class="tag">${recipe.servings} porsi</span>
                            </div>
                            <button class="btn btn-block view-recipe-btn" data-id="${recipe.id}">
                                Lihat Resep Lengkap
                            </button>
                        </div>
                    </div>
                `;
            });
            
            recipeGrid.innerHTML = html;
            
            // Tambahkan event listener untuk tombol lihat resep
            document.querySelectorAll('.view-recipe-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const recipeId = parseInt(this.getAttribute('data-id'));
                    showRecipeDetail(recipeId);
                });
            });
        }

        // Fungsi untuk menampilkan detail resep
        function showRecipeDetail(recipeId) {
            const recipe = recipeDatabase.find(r => r.id === recipeId);
            if (!recipe) return;
            
            const modal = document.getElementById('recipeModal');
            const content = document.getElementById('recipeDetailContent');
            
            let ingredientsHtml = '';
            recipe.ingredients.forEach(ingredient => {
                ingredientsHtml += `
                    <li>
                        <span>${ingredient.name}</span>
                        <span>${ingredient.amount} ${ingredient.unit}</span>
                    </li>
                `;
            });
            
            let instructionsHtml = '';
            recipe.instructions.forEach(instruction => {
                instructionsHtml += `<li>${instruction}</li>`;
            });
            
            content.innerHTML = `
                <div class="recipe-detail-header">
                    <div class="recipe-detail-img">
                        <i class="fas fa-utensils" style="font-size: 4rem;"></i>
                    </div>
                    <div class="recipe-detail-info">
                        <h2 class="recipe-detail-title">${recipe.name}</h2>
                        <div class="recipe-detail-meta">
                            <div class="recipe-meta-item">
                                <i class="fas fa-clock"></i> ${recipe.cookTime} menit
                            </div>
                            <div class="recipe-meta-item">
                                <i class="fas fa-user"></i> ${recipe.servings} porsi
                            </div>
                            <div class="recipe-meta-item">
                                <i class="fas fa-fire"></i> ${recipe.calories} kalori/porsi
                            </div>
                        </div>
                        <div class="recipe-tags">
                            <span class="tag">${recipe.category}</span>
                            <span class="tag">${recipe.difficulty}</span>
                            <span class="tag">Karbohidrat: ${recipe.carbs}g</span>
                            <span class="tag">Protein: ${recipe.protein}g</span>
                            <span class="tag">Lemak: ${recipe.fat}g</span>
                            <span class="tag">Serat: ${recipe.fiber}g</span>
                        </div>
                    </div>
                </div>
                
                <div class="recipe-detail-content">
                    <div class="recipe-section">
                        <h3 class="section-title"><i class="fas fa-shopping-basket"></i> Bahan-bahan</h3>
                        <ul class="ingredients-list">
                            ${ingredientsHtml}
                        </ul>
                    </div>
                    
                    <div class="recipe-section">
                        <h3 class="section-title"><i class="fas fa-list-ol"></i> Cara Membuat</h3>
                        <ol class="instructions-list">
                            ${instructionsHtml}
                        </ol>
                    </div>
                </div>
                
                ${recipe.tips ? `
                <div class="recipe-tips">
                    <strong><i class="fas fa-lightbulb"></i> Tips:</strong> ${recipe.tips}
                </div>
                ` : ''}
            `;
            
            modal.style.display = 'block';
        }

        // Event Listeners
        document.getElementById('nutritionForm').addEventListener('submit', function(e) {
            e.preventDefault();
            calculateNutrition();
        });

        document.getElementById('updateMealPlanBtn').addEventListener('click', function() {
            const calorieTarget = document.getElementById('calorieTargetSelect').value;
            displayMealPlan(calorieTarget);
        });

        document.getElementById('closeRecipeModal').addEventListener('click', function() {
            document.getElementById('recipeModal').style.display = 'none';
        });

        // Tutup modal ketika klik di luar konten
        window.addEventListener('click', function(event) {
            const modal = document.getElementById('recipeModal');
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });

        // Tab functionality
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                
                tab.classList.add('active');
                document.getElementById(tab.dataset.tab).classList.add('active');
            });
        });

        // Inisialisasi
        document.addEventListener('DOMContentLoaded', function() {
            // Tampilkan rencana makan default
            displayMealPlan(2000);
            
            // Tampilkan resep
            displayRecipes();
        });
 
